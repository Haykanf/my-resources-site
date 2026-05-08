import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getResources() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
  });

  return response.results.map((page) => ({
    id: page.id,
    title: page.properties.Name.title[0]?.plain_text || '',
    description: page.properties.Description.rich_text[0]?.plain_text || '',
    category: page.properties.category.select?.name || '',
    url: page.properties.URL.url || '',
  }));
}