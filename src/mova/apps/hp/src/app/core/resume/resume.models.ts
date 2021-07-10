export interface Resume {
  name: string;
  surname: string;
  titles: string[];
  location: string;
  phone: number;
  profile: string[];
  personal: Personal;
  socialProfiles: SocialProfile[];
  languages: Language[];
  skills: Skill[];
  works: Work[];
  educations: Education[];
  courses: Course[];
}

export interface Personal {
  address: string;
  birth: Birth;
  nationality: string;
  drivingLicense: string;
  hobbies: string[];
}

export interface Birth {
  date: string;
  location: string;
}

export interface SocialProfile {
  name: string;
  url: string;
}

export interface Language {
  language: string;
  level: number;
}

export interface Skill {
  skill: string;
  level: number;
}

export interface Work {
  title: string;
  date: DateRange;
  company: string;
  location: string;
  roles: Role[];
}

export interface Role {
  title: string;
  responsibilities: string[];
}

export interface Education {
  school: string;
  degree: null | string;
  date: DateRange;
  city: string;
  description: string[];
}

export interface Course {
  title: string;
  date: DateRange;
  url: string;
}

export interface DateRange {
  start: string;
  end: null | string;
}
