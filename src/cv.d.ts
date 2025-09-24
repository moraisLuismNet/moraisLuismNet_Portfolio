export interface CV {
  basics: Basics;
  work: Array<Work>;
  education: Array<Education>;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Array<Profiles>;
}

interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

interface Profiles {
  network: string;
  username: string;
  url: string;
}

interface Work {
  summary: string;
}

type DateStr = `${string}-${string}-${string}`;

interface Education {
  summary: string;
}
