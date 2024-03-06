import fetch from "node-fetch";

export const mostPopularRestaurants = async (req, res) => {
  if (!req.body) {
    res.status(400).json("error");
  }
  var formData = req.body;
  var { location, search, page, zip } = formData;
  console.log(formData);
  if (!search) {
    search = "food";
  }
  if (!page || page < 1) {
    page = 1;
  }
  const limit = 10; // Number of results per page
  const offset = (page - 1) * limit; // Calculate the offset

  console.log("Search term:", search);
  console.log("Location:", location);
  console.log("Page:", page);

  async function getRestaurants() {
    let response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${search}&location=${
        zip || location
      }&limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );
    let data = await response.json();
    console.log(data);
    return res.status(200).json(data);
  }

  try {
    await getRestaurants();
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get next page
export const nextPage = async (req, res) => {
  if (!req.body) {
    res.status(400).json("error");
  }
  var formData = req.body;
  var { location, search, page, zip } = formData;
  console.log(formData);
  if (!search) {
    search = "food";
  }
  if (!page || page < 1) {
    page = 1;
  }
  const limit = 10; // Number of results per page
  const offset = (page - 1) * limit; // Calculate the offset

  console.log("Search term:", search);
  console.log("Zip:", zip);
  console.log("Page:", page);

  async function getRestaurants() {
    let response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${search}&location=${zip}&limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );
    let data = await response.json();
    console.log(data);
    return res.status(200).json(data);
  }

  try {
    await getRestaurants();
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

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
  "Austin, TX",
  "Jacksonville, FL",
  "Fort Worth, TX",
  "Columbus, OH",
  "San Francisco, CA",
  "Charlotte, NC",
  "Indianapolis, IN",
  "Seattle, WA",
  "Denver, CO",
  "Washington, DC",
  "Boston, MA",
  "El Paso, TX",
  "Nashville, TN",
  "Detroit, MI",
  "Oklahoma City, OK",
  "Portland, OR",
  "Las Vegas, NV",
  "Memphis, TN",
  "Louisville, KY",
  "Baltimore, MD",
  "Milwaukee, WI",
  "Albuquerque, NM",
  "Tucson, AZ",
  "Fresno, CA",
  "Sacramento, CA",
  "Mesa, AZ",
  "Kansas City, MO",
  "Atlanta, GA",
  "Long Beach, CA",
  "Colorado Springs, CO",
  "Raleigh, NC",
  "Miami, FL",
  "Virginia Beach, VA",
  "Omaha, NE",
  "Oakland, CA",
  "Minneapolis, MN",
  "Tulsa, OK",
  "Wichita, KS",
  "New Orleans, LA",
  "Arlington, TX",
  "Cleveland, OH",
  "Tampa, FL",
  "Bakersfield, CA",
  "Aurora, CO",
  "Anaheim, CA",
  "Honolulu, HI",
  "Santa Ana, CA",
  "Riverside, CA",
  "Corpus Christi, TX",
  "Lexington, KY",
  "Stockton, CA",
  "Saint Paul, MN",
  "Anchorage, AK",
  "Newark, NJ",
  "Plano, TX",
  "Fort Wayne, IN",
  "St. Petersburg, FL",
  "Glendale, AZ",
  "Lincoln, NE",
  "Norfolk, VA",
  "Jersey City, NJ",
  "Greensboro, NC",
  "Chandler, AZ",
  "Birmingham, AL",
  "Henderson, NV",
  "Scottsdale, AZ",
  "North Hempstead, NY",
  "Madison, WI",
  "Hialeah, FL",
  "Baton Rouge, LA",
  "Chesapeake, VA",
  "Orlando, FL",
  "Lubbock, TX",
  "Garland, TX",
  "Akron, OH",
  "Rochester, NY",
  "Chula Vista, CA",
  "Reno, NV",
  "Laredo, TX",
  "Durham, NC",
  "Modesto, CA",
  "Huntington Beach, CA",
  "Montgomery, AL",
  "Boise City, ID",
  "Arlington, VA",
  "San Bernardino, CA",
  "Spokane, WA",
  "Yonkers, NY",
  "Tacoma, WA",
  "Des Moines, IA",
];

// fetch popular restaurants
export const fetchPopularRestaurants = async (req, res) => {
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
      res.status(200).json(data.businesses);
    } else {
      throw new Error("Failed to fetch restaurants");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
