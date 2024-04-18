import {CountryInterface} from "./country.interface";
import {Politics, Geolocation} from "./types";

export class Country implements CountryInterface {
    private name: string;
    private president: string;
    private color: string;
    private population: number;
    private states: string[];
    private gdp: number;
    private size: number;
    private location: Geolocation;
    private politics: Politics;
    private rank: number;

    constructor(
        name: string,
        president: string,
        color: string,
        population: number,
        states: string[],
        gdp: number,
        size: number,
        location: Geolocation,
        politics: Politics,
        rank: number
    ) {
        this.name = name;
        this.president = president;
        this.color = color;
        this.population = population;
        this.states = states;
        this.gdp = gdp;
        this.size = size;
        this.location = location;
        this.politics = politics;
        this.rank = rank;
    }

    getColor(): string {
        return this.color;
    }

    getGdp(): number {
        return this.gdp;
    }

    getPolitics(): Politics {
        return this.politics;
    }

    getLocation(): Geolocation {
        return this.location;
    }

    getName(): string {
        return this.name;
    }


    getPopulation(): number {
        return this.population;
    }

    getPresident(): string {
        return this.president;
    }

    getRank(): number {
        return this.rank;
    }

    getSize(): number {
        return this.size;
    }

    getStates(): string[] {
        return this.states;
    }

}