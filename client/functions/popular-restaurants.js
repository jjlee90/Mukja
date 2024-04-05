const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  // List of popular cities in the USA
  const popularCities = [
    "New York City, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Antonio, TX",
    "San Diego, CA",
    "Dallas, TX",
    "San Jose, CA",
  ];

  // Select a random city from the popularCities array
  const randomCity =
    popularCities[Math.floor(Math.random() * popularCities.length)];

  try {
    // Fetch restaurants from Yelp API
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=food&location=${randomCity}&limit=6`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return {
        statusCode: 200,
        body: JSON.stringify(data.businesses),
      };
    } else {
      throw new Error("Failed to fetch restaurants");
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
