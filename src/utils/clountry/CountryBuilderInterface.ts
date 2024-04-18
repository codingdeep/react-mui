import {Politics, Geolocation} from "./types";
import {Country} from "./Country";
import {CountryBuilder} from "./CountryBuilder";

export interface CountryBuilderInterface {
    setName: (name: string) => CountryBuilder;
    setColor: (color: string) => CountryBuilder;
    setPresident: (president: string) => CountryBuilder;
    setStates: (states: string[]) => CountryBuilder;
    setGdp: (gdp: number) => CountryBuilder;
    setSize: (size: number) => CountryBuilder;
    setLocation: (location: Geolocation) => CountryBuilder;
    setPolitics: (politics: Politics) => CountryBuilder;
    setPopulation: (population: number) => CountryBuilder;
    setRank: (rank: number) => CountryBuilder;
    build: () => Country;
    getCountry: () => Country;
}