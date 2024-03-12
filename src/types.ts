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
