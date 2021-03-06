import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

export type Items = {
  [key: string]: string
}

const postsDirectory = join(process.cwd(), '_posts')

export const getPostSlugs = (): string[] => fs.readdirSync(postsDirectory)

export const getPostBySlug = (slug: string, fields: string[] = []): Items => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export const getAllPosts = (fields: string[] = []): Items[] => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => !post.db)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export const getAllDbPosts = (fields: string[] = []): Items[] => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => post.db)
    // sort posts by date in ascending order
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1))
  return posts
}
