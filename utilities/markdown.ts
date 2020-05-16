import path from 'path';

import fs from 'fs-extra';
import matter from 'gray-matter';

export async function readMarkdownFilesFromDir<T = {}>(dir: string) {
  const markdownFiles = await fs.readdir(dir);
  const content: T[] = [];
  for (const file of markdownFiles) {
    const markdown = await fs.readFile(path.join(dir, file), 'UTF-8');
    const {data} = matter(markdown);
    content.push({...data} as T);
  }
  return content;
}
