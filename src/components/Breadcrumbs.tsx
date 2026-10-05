import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  maxWidth?: '7xl' | '4xl' | '5xl' | 'full';
  className?: string;
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

export default function Breadcrumbs({ items, maxWidth = '7xl', className = '' }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
    ...items.map(item => ({
      ...item,
      url: normalizeBreadcrumbUrl(item.url)
    }))
  ];

  const hasCustomPadding = className.includes('px-') || className.includes('p-');
  const paddingClass = hasCustomPadding ? '' : 'px-4 sm:px-6 lg:px-8';
  
  const hasCustomTopPadding = className.includes('pt-') || className.includes('py-') || className.includes('p-');
  const topPaddingClass = hasCustomTopPadding ? '' : 'pt-6 pb-2';

  const maxWClass = maxWidth === '4xl' 
    ? 'max-w-4xl' 
    : maxWidth === '5xl' 
      ? 'max-w-5xl' 
      : maxWidth === 'full' 
        ? 'w-full' 
        : 'max-w-7xl';

  return (
    <nav aria-label="Breadcrumb" className={`w-full ${topPaddingClass} ${paddingClass} ${maxWClass} ${className}`}>
      <ol className="flex items-center space-x-2 text-xs sm:text-sm text-[#546059] overflow-x-auto whitespace-nowrap">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-[#88968e] mx-1.5 flex-shrink-0" />
              )}
              {isLast ? (
                <span className="font-semibold text-[#c99a2e] truncate" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <a
                  href={item.url}
                  className="flex items-center hover:text-[#071510] transition-colors"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5 mr-1.5 text-[#88968e] flex-shrink-0" />}
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
