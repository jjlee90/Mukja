import api from "./api";

export async function fetchLocation(data) {
  try {
    const response = await api.post("/location", data);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
}

export async function fetchPopularRestaurants() {
  try {
    const response = await api.get("/popular-restaurants");

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch restaurants");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
}
