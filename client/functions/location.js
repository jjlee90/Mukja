const fetch = require("node-fetch");
const zlib = require("zlib");
// exports.handler = async function (event, context) {
//   const { search = "food", location, results = "10" } = JSON.parse(event.body);

//   if (!location) {
//     return {
//       statusCode: 400,
//       body: JSON.stringify({ error: "Location is required" }),
//     };
//   }

//   try {
//     const rest = await fetch(
//       `https://api.yelp.com/v3/businesses/search?term=${search}&location=${location}&limit=${results}`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.YELP_API_KEY}`,
//         },
//       }
//     );
//     const data = await rest.json();
//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Internal Server Error" }),
//     };
//   }
// };

exports.handler = async function (event, context) {
  const {
    search = "food",
    location,
    results = "10",
    apiKey,
  } = JSON.parse(event.body);

  if (!location || !apiKey) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Location and apiKey are required" }),
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

    // Compress the response data
    const compressedData = zlib.gzipSync(JSON.stringify(data));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Content-Encoding": "gzip", // Indicate that the content is gzip compressed
      },
      body: compressedData.toString("base64"), // Encode the compressed data as base64
      isBase64Encoded: true, // Indicate that the body is base64 encoded
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
