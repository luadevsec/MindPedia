// src/utils/api.js

const API_BASE_URL = "http://localhost:8080";

// Função para requisições GET
const getRequest = async (endpoint : string) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GET request failed:", error);
    throw error;
  }
};

// Função para requisições POST
const postRequest = async (endpoint : string, body: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("POST request failed:", error);
    throw error;
  }
};

class Request {
  static async get(endpoint: string) {
    return getRequest(endpoint);
  }

  static async post(endpoint: string, body: any) {
    return postRequest(endpoint, body);
  }
}

export default Request;
