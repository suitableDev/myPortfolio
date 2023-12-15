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
    `*[_type == "projects"] {
      title,
      description,
      "tags": tags[],
      "image": image.asset -> url,
      "alt": image.alt,
      text
    }
    `
  )

  return data;
}

export async function getContactData() {
  const data = await client.fetch(
    `*[_type == "contact"][0] {
      email,
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
