import axios from "axios";

const url = import.meta.env.VITE_API_DOMAIN;
console.log(url);

export async function getUsers() {
  try {
    //handle case when the domain is not available
    if (!url) {
      return [];
    }

    const response = await axios.get(`${url}/users`);

    if (response.status !== 200) {
      throw new Error("Failed to fetch Data");
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
