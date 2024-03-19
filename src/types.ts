type TitleDesc = {
  title: string
  description: string
}

export type Frontmatter = {
  layout: string
  file: string
} & TitleDesc

export type MarkdownRecord = {
  url: string
} & TitleDesc

// sidebar types

export type Section = {
  sectionName?: string
  sectionItems: { [key: string]: string | Subsection }
}

export type Subsection = {
  subsectionName?: string
  subsectionItems: { [key: string]: string }
}
