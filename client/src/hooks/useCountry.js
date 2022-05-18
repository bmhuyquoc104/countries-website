import { useQuery } from "react-query";
import { getAllCountries, getCountryByName } from "../api/CountriesApi";

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
export { useGetCountryByName, useGetAllCountries };
