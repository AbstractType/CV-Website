export interface Job {
  company: string;
  role: string;
  start: string;
  end: string | 'Present';
  location?: string;
  bullets: string[];
  tech?: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
  details?: string;
}

export interface CVLinks {
  linkedin: string;
  github?: string;
  website?: string;
}

export interface CV {
  name: string;
  title: string;
  tagline: string;
  about: string;
  location: string;
  email: string;
  languages?: string[];
  links: CVLinks;
  experience: Job[];
  skills: SkillGroup[];
  education: Education[];
}
