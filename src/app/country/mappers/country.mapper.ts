import type { Country } from '../interfaces/country.interface';
import type { RESTCountry } from '../interfaces/rest-countries.interface';

export class CountryMapper {
  // static RestCountry => Country
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      capital: restCountry.capital?.join(','),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      population: restCountry.population,
      borders: restCountry.borders ?? [],
      currencies: (restCountry.currencies) ? Object.values(restCountry.currencies)[0] : { name: 'No Currency', symbol: 'No Symbol' },
      languages: (restCountry.languages) ? Object.values(restCountry.languages)[0] : { name: '' },



      region: restCountry.region,
      subRegion: restCountry.subregion,
    };
  }

  // static RestCountry[] => Country[]
  static mapRestCountryArrayToCountryArray(
    restCountries: RESTCountry[]
  ): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }
}
