import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


export async function getProjectsData() {
  const data = await client.fetch(
    `*[_type == 'profile'][0] {
      projects {
    title,
    items[] {
    name,
    description,
    "tags": tags[],
    "image": image.asset -> url,
    "alt": image.alt,
    text}
  }
}
    `
  )

  return data;
}

export async function getProfileData() {
  const data = await client.fetch(
    `*[_type == 'profile'][0] {

      intro     {
        "image": image.asset -> url,
        "alt": image.alt,
        text
        },
      about,
      projects {
        title,
        items{
        description,
        "tags": tags[],
        "image": image.asset -> url,
        "alt": image.alt,
        text}
      },
      skills {
        title,
        "tags": tags[],
      },

      experience,
      contact,
    }
    `
  )

  return data;
}
