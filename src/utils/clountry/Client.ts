import {CountryBuilder} from "./CountryBuilder";

export class Client {
    builder: CountryBuilder;

    constructor() {
        this.builder = new CountryBuilder();
    }

    buildCountry() {
        const localStates = ['Abia', 'Adamawa', 'Akwa'];
        return this.builder
            .setName('Nigeria')
            .setColor('Green')
            .setSize(232424)
            .setStates(localStates)
            .setPresident('NONE')
            .setGdp(2324)
            .build();

    }
}