import {Politics, Geolocation} from "./types";

export interface CountryInterface {
    getName: () => string;
    getPresident: () => string;
    getColor: () => string;
    getStates: () => string[];
    getGdp: () => number;
    getSize: () => number;
    getLocation: () => Geolocation;
    getPolitics: () => Politics;
    getPopulation: () => number;
    getRank: () => number;
}