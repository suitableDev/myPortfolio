import { TypedObject } from "sanity";

export interface introProps {
  _id?: string;
  image?: string;
  alt?: string;
  text?: [];
  url?: string;
  cvURL?: string;
}

export interface aboutProps {
  _id?: string;
  title?: string;
  text?: TypedObject[];
}

export interface projectHeadingProps {
  _id?: string;
  title?: string;
  description?: [];
}

export interface projectsProps {
  title?: string;
  description?: TypedObject[];
  url?: string | null;
  tags?: string[];
  image?: string;
  alt?: string;
}

export interface skillsProps {
  _id?: string;
  title?: string;
  tags: string[];
}

export interface experienceHeadingProps {
  _id?: string;
  title?: string;
  description?: [];
}

export interface experienceProps {
  _id?: string;
  title?: string;
  location?: string;
  date?: string;
  description?: TypedObject[];
  text?: TypedObject[];
  icon?: {
    svg?: string;
  };
}

export interface contactProps {
  _id?: string;
  title?: string;
  email?: string;
}

export interface footerProps {
  _id?: string;
  copyright?: string;
  text?: TypedObject[];
}
