const fs = require('fs');

const lines = [
  "import { getResources } from '../lib/notion';",
  "import ResourcesClient from './resources-client';",
  "",
  "export const dynamic = 'force-dynamic';",
  "",
  "export default async function Home() {",
  "  const resources = await getResources();",
  "",
  "  return (",
  "    <div className=\"max-w-6xl mx-auto px-6 py-16\">",
  "      <h1 className=\"text-5xl font-bold mb-3 tracking-tight\">Resources</h1>",
  "      <p className=\"text-gray-400 text-lg mb-12\">A curated list of tools, articles and guides.</p>",
  "      <ResourcesClient resources={resources} />",
  "    </div>",
  "  );",
  "}"
];

fs.writeFileSync('app/page.jsx', lines.join('\n'));
console.log('Done!');