import { Client } from '@notionhq/client';
import {
  PageObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { NotionAPI } from 'notion-client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const notionAPI = new NotionAPI();

const databaseId = process.env.NOTION_BLOG_DATABASE_ID!;

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  author: string;
};

function getRichText(richText: RichTextItemResponse[]): string {
  return richText.map((t) => t.plain_text).join('');
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Published',
      checkbox: { equals: true },
    },
    sorts: [{ property: 'Date', direction: 'descending' }],
  });

  return response.results
    .filter((page): page is PageObjectResponse => 'properties' in page)
    .map((page) => {
      const props = page.properties;

      const title =
        props.Title?.type === 'title'
          ? getRichText(props.Title.title)
          : 'Untitled';

      const slug =
        props.Slug?.type === 'rich_text'
          ? getRichText(props.Slug.rich_text)
          : '';

      const description =
        props.Description?.type === 'rich_text'
          ? getRichText(props.Description.rich_text)
          : '';

      const date =
        props.Date?.type === 'date'
          ? (props.Date.date?.start ?? '')
          : '';

      const tags =
        props.Tags?.type === 'multi_select'
          ? props.Tags.multi_select.map((t) => t.name)
          : [];

      const published =
        props.Published?.type === 'checkbox'
          ? props.Published.checkbox
          : false;

      const author =
        props.Author?.type === 'people' && props.Author.people.length > 0
          ? (props.Author.people[0] as { name?: string }).name ?? 'Arman'
          : 'Arman';

      return { id: page.id, title, slug, description, date, tags, published, author };
    });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export async function getPageRecordMap(pageId: string) {
  return await notionAPI.getPage(pageId);
}