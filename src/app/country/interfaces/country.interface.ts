import { Currency, Languages } from './rest-countries.interface';

export interface Country {
  cca2: string;
  flag: string;
  flagSvg: string;
  name: string;
  capital: string;
  population: number;
  borders?: string[];
  currencies: Currency;
  languages: Languages;

  region: string;
  subRegion: string;
}
