import fetch from "node-fetch";

export async function handler(event, context) {
  const { search = "food", location, results = "10" } = JSON.parse(event.body);

  if (!location) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Location is required" }),
    };
  }

  try {
    const rest = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${search}&location=${location}&limit=${results}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );
    const data = await rest.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
}
