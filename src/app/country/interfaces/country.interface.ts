export interface Country {
  cca2: string;
  flag: string;
  flagSvg: string;
  name: string;
  capital: string;
  population: number;
  borders: string[];
  languages: { };
  currencies: {
    name: string;
    symbol: string;

  };


  region: string;
  subRegion: string;
}
