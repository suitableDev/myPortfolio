import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export async function getIntroData() {
  return client.fetch(
    groq`*[_type == "imageTest"][0]
    {
        "pic": pic.asset -> url,
        "alt": pic.alt,
        text
        }`
  )
}

export async function getAboutMeData() {
  return client.fetch(
    groq`*[_type == "about"][0]
    {
        title,
        text
        }`
  )
}

export async function getProjectsData() {
  return client.fetch(
    groq`*[_type == "projects"] {
      title,
      description,
      "tags": tags[],
      "image": image.asset -> url,
      "alt": image.alt,
      text
    }
    `
  )
}

export async function getSkillsData() {
  return client.fetch(
    groq`*[_type == "skills"] {
      "tags": tags[],
    }
    `
  )

}
export async function getExperienceData() {
  return client.fetch(
    groq`*[_type == "experience"] {
      title,
        location,
        description,
        date,
    }
    `
  )
}
