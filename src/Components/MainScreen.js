"use client";
import { useState } from "react";
import { useEffect } from "react";
import ExpensesTable from "./ExpensesTable";

function MainScreen() {
  const[countries, setCountries] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const formatCountries = data.map((country) => ({
            name: country.name.common,
            flag: country.flags.svg
        }));
        setCountries(formatCountries);
        setLoading(false);
      } catch (error) {
        alert("Failed to fetch countries", error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <div>Loading...</div>;


  return (
    <ExpensesTable items={countries} />
  )

}

export default MainScreen;