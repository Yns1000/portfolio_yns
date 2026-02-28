import { groq } from 'next-sanity'

export const projectsQuery = groq`
  *[_type == "project"] | order(_createdAt asc) {
    _id,
    "title": coalesce(title[$lang], title.en, ""),
    "slug": slug.current,
    "description": coalesce(description[$lang], description.en, ""),
    mainImage,
    tags,
    githubUrl,
    liveUrl
  }
`

export const experiencesQuery = groq`
  *[_type == "experience"] | order(order desc, startDate desc) {
    _id,
    "role": coalesce(role[$lang], role.en, ""),
    company,
    location,
    startDate,
    endDate,
    isCurrent,
    "description": coalesce(description[$lang], description.en, ""),
    logo,
    whiteBackground
  }
`

export const educationQuery = groq`
  *[_type == "education"] | order(order desc, startDate desc) {
    _id,
    "degree": coalesce(degree[$lang], degree.en, ""),
    school,
    location,
    startDate,
    endDate,
    isCurrent,
    "description": coalesce(description[$lang], description.en, "")
  }
`

export const skillsQuery = groq`
  *[_type == "skill"] | order(order desc) {
    _id,
    "name": coalesce(name[$lang], name.en, ""),
    category,
    "level": coalesce(level[$lang], level.en, ""),
    badge
  }
`

export const associationsQuery = groq`
  *[_type == "association"] {
    _id,
    name,
    "role": coalesce(role[$lang], role.en, ""),
    "description": coalesce(description[$lang], description.en, ""),
    instagramUrl,
    tiktokUrl,
    donationUrl,
    bgColor,
    textColor
  }
`

export const hobbiesQuery = groq`
  *[_type == "hobby"] | order(order desc) {
    _id,
    "title": coalesce(title[$lang], title.en, ""),
    iconName,
    colSpan
  }
`
export const settingsQuery = groq`
  *[_type == "settings"][0] {
    _id,
    title,
    githubUrl,
    linkedinUrl,
    contactEmail,
    cvFrUrl,
    cvEnUrl
  }
`
