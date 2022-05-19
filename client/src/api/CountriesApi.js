// Import axios library for working with api
import axios from "axios";

// Declare baseURL
const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

// Function to get all countries
const getAllCountries = () => api.get("/all");

// Function to get country by name
const getCountryByName = (name) => api.get(`/name/${name}`);

// Function to get country by code
const getCountryByCode = (code) => api.get(`/alpha/${code}`);

// Export functions
export { getAllCountries, getCountryByName, getCountryByCode };
