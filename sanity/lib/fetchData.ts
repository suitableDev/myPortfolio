import { client } from "./client";

export async function basicFetch(query: string) {
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
}

export const introData = `
*[_type == 'intro'][0] {
    _id,
    "image": image.asset -> url,
    "alt": image.alt,
    text,
}
`;
export const aboutData = `
*[_type == 'about'][0] {
    _id,
    title,
    text,
}
`;
export const projectHeadingData = `
*[_type == 'projectHeading'][0]{
    _id,
    title,
    description,
}
`;
export const projectsData = `
*[_type == 'projects']| order(_createdAt asc)
{
    _id,
    title,
    description,
    url,
    "tags": tags[],
    "image": image.asset -> url,
    "alt": image.alt,
}
`;
export const skillsData=`
*[_type == 'skills'][0]{
    _id,
    title,
    "tags": tags[]
}
`;
export const experienceHeadingData = `
*[_type == 'experienceHeading'][0]{
    _id,
    title,
    description,
}
`;
export const experienceData=`
*[_type == 'experience']{
    _id,
    title,
    location,    
    date,
    description,
    icon
} 
`;
export const contactData=`
*[_type == 'contact'][0]{
    _id,
    title,
      email,
  }
`
export const footerData =`
*[_type == 'footer'][0]{
    _id,
    copyright,
      text,
  }
`
