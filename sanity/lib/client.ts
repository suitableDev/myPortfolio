import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export async function getIntroData() {
  return client.fetch(
    `*[_type == "intro"][0]
    {
        "image": image.asset -> url,
        "alt": image.alt,
        text
        }`
  )
}

export async function getAboutMeData() {
  const data = await client.fetch(
    `*[_type == "about"][0] {
      title,
      text
    }`
  );

  return data;
}

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

export async function getSkillsData() {
  const data = await client.fetch(
    `*[_type == "skills"][0] {
      title,
      "tags": tags[],
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
      experience,
    }
    `
  )

  return data;
}
