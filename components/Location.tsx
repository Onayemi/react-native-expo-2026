import api from "@/hooks/useAxios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AppDropdown from "./Select";

type Option = { label: string; value: string };

const apiBase = process.env.EXPO_PUBLIC_APIBASE;

export default function LocationDropdown() {
  const [countries, setCountries] = useState<Option[]>([]);
  const [states, setStates] = useState<Option[]>([]);
  const [cities, setCities] = useState<Option[]>([]);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // Fetch countries on load
  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const res = await api.get("/countries");
    console.log(res.data);
    setCountries(
      res.data.map((c: any) => ({
        label: c.name,
        value: String(c.id),
      })),
    );
  };

  const fetchStates = async (countryId: string) => {
    const res = await api.get(`/states/${countryId}`);
    setStates(
      res.data.map((s: any) => ({
        label: s.name,
        value: String(s.id),
      })),
    );
  };

  const fetchCities = async (stateId: string) => {
    const res = await api.get(`/cities/${stateId}`);
    setCities(
      res.data.map((c: any) => ({
        label: c.name,
        value: String(c.id),
      })),
    );
  };

  return (
    <View>
      <Text>url: {apiBase}</Text>
      {/* Country */}
      <AppDropdown
        label="Country"
        value={country}
        list={countries}
        setValue={(val) => {
          setCountry(val);
          setState("");
          setCity("");
          setStates([]);
          setCities([]);
          fetchStates(val);
        }}
      />
      {/* State */}
      <AppDropdown
        label="State"
        value={state}
        list={states}
        disabled={!country}
        setValue={(val) => {
          setState(val);
          setCity("");
          setCities([]);
          fetchCities(val);
        }}
      />
      {/* City */}
      <AppDropdown
        label="City"
        value={city}
        list={cities}
        disabled={!state}
        setValue={setCity}
      />
    </View>
  );
}
