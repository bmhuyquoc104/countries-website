import React from "react";
import PropTypes from "prop-types";
import { useGetCountryByName } from "../hooks/useCountry";
import Country from "../components/Country/Country";

function CountryDetail({ name }) {
  const {
    data: country,
    isError,
    error,
    isLoading,
  } = useGetCountryByName("Peru");

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (!name) {
    return "";
  }
  console.log(country.data);

  return (
    <Country />
  );
}

CountryDetail.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CountryDetail;
