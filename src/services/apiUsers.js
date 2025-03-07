import axios from "axios";

const url = import.meta.env.VITE_API_DOMAIN;

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
    throw error;
  }
}

export async function deleteUser(userId) {
  try {
    const response = await axios.delete(`${url}/users/${userId}`);

    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}
