import {CountryBuilderInterface} from "./CountryBuilderInterface";
import {Country} from "./Country";
import {Politics, Geolocation} from "./types";

export class CountryBuilder implements CountryBuilderInterface {
    name: string;
    president: string;
    color: string;
    population: number;
    states: string[];
    gdp: number;
    size: number;
    location: Geolocation;
    politics: Politics;
    rank: number;
    country: Country;

    build(): Country {
        this.country = new Country(this.name, this.president, this.color, this.population, this.states, this.gdp, this.size, this.location, this.politics, this.rank);
        return this.country;
    }

    getCountry(): Country {
        return this.country;
    }

    setColor(color: string): CountryBuilder {
        this.color = color;
        return this;
    }

    setGdp(gdp: number): CountryBuilder {
        this.gdp = gdp;
        return this;
    }

    setLocation(location: Geolocation): CountryBuilder {
        this.location = location;
        return this;
    }

    setName(name: string): CountryBuilder {
        this.name = name;
        return this;
    }

    setPolitics(politics: Politics): CountryBuilder {
        this.politics = politics;
        return this;
    }

    setPopulation(population: number): CountryBuilder {
        this.population = population;
        return this;
    }

    setPresident(president: string): CountryBuilder {
        this.president = president;
        return this;
    }

    setRank(rank: number): CountryBuilder {
        this.rank = rank;
        return this;
    }

    setSize(size: number): CountryBuilder {
        this.size = size;
        return this;
    }

    setStates(states: string[]): CountryBuilder {
        this.states = states;
        return this;
    }

}