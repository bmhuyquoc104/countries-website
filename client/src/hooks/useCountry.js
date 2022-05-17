import { useQuery } from "react-query";
import { getAllCountries, getCountryByName } from "../api/CountriesApi";

const useGetAllCountries = (onSuccess, onError) => (
  useQuery(["countries"], getAllCountries, {
    onSuccess,
    onError,
  })
);

const useGetCountryByName = (onSuccess, onError, name) => (
  useQuery(["country", name], () => getCountryByName, {
    onSuccess,
    onError,
    enabled: Boolean(name),
  })
);
export { useGetCountryByName, useGetAllCountries };
