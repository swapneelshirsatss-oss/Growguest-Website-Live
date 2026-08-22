import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

function normalizeBreadcrumbUrl(url: string): string {
  if (!url) return '/';
  if (url === '/') return '/';
  if (url === '/blog') return '/hospitality-digital-marketing-blog/';
  if (url === '/blog/') return '/hospitality-digital-marketing-blog/';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url.endsWith('/') ? url : `${url}/`;
  }
  return url.endsWith('/') ? url : `${url}/`;
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
    ...items.map(item => ({
      ...item,
      url: normalizeBreadcrumbUrl(item.url)
    }))
  ];

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center space-x-2 text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-slate-400 mx-2 flex-shrink-0" />
              )}
              {isLast ? (
                <span className="font-medium text-brand-teal truncate" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <a
                  href={item.url}
                  className="flex items-center hover:text-brand-teal transition-colors"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />}
                  <span>{item.name}</span>
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
