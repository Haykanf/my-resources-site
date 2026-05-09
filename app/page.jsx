import { getResources } from '../lib/notion';
export const dynamic = 'force-dynamic';
export default async function Home() {
  const resources = await getResources();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Resources</h1>
      <p className="text-gray-500 mb-12">A curated list of tools, articles and guides.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
         <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              {resource.category}
            </span>
            <h2 className="text-lg font-semibold mt-2 mb-1">{resource.title}</h2>
            <p className="text-gray-500 text-sm">{resource.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}