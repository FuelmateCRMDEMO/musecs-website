import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { SchemaScript } from './schema-script';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: 'Home', url: '/' }, ...items];
  const schema = generateBreadcrumbSchema(allItems);

  return (
    <>
      <SchemaScript schema={schema} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-gray-400">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-2">
                {index > 0 && <ChevronRight size={12} className="text-gray-600" />}
                {index === 0 && <Home size={12} className="text-gray-500 mr-0.5" />}
                {isLast ? (
                  <span className="text-accent font-semibold px-2 py-0.5 bg-accent/10 border border-accent/20">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
