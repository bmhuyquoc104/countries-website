/* eslint-disable implicit-arrow-linebreak */
import { useQuery } from "react-query";
import {
  getAllCountries,
  getCountryByName,
  getCountryByCode,
  getCountryByRegion,
} from "../api/CountriesApi";

// Custom hook to get all countries using useQuery hook
const useGetAllCountries = (onSuccess, onError) =>
  useQuery(["countries"], getAllCountries, {
    onSuccess,
    onError,
  });

// Custom hook to get country by name using useQuery hook
const useGetCountryByName = (name) =>
  useQuery(["country", name], () => getCountryByName(name), {
    enabled: Boolean(name),
  });
// Custom hook to get country by code using useQuery hook
const useGetCountryByCode = (code) =>
  useQuery(["country-code", code], () => getCountryByCode(code), {
    enabled: Boolean(code),
  });
// Custom hook to get country by region using useQuery hook
const useGetCountryByRegion = (region) =>
  useQuery(["country-region", region], () => getCountryByRegion(region), {
    enabled: Boolean(region),
  });
export {
  useGetCountryByName,
  useGetAllCountries,
  useGetCountryByCode,
  useGetCountryByRegion,
};
