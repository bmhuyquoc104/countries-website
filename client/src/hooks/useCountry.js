import { useQuery } from "react-query";
import { getAllCountries, getCountryByName, getCountryByCode } from "../api/CountriesApi";

const useGetAllCountries = (onSuccess, onError) => (
  useQuery(["countries"], getAllCountries, {
    onSuccess,
    onError,
  })
);

const useGetCountryByName = (name) => (
  useQuery(["country", name], () => getCountryByName(name), {
    enabled: Boolean(name),
  })
);

const useGetCountryByCode = (code) => (
  useQuery(["country-code", code], () => getCountryByCode(code), {
    enabled: Boolean(code),
  })
);
export { useGetCountryByName, useGetAllCountries, useGetCountryByCode };
