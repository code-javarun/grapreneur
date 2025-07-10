// SEO utility functions for dynamic content optimization

export const generatePageTitle = (pageTitle: string, siteName: string = "Grapreneur") => {
  return `${pageTitle} | ${siteName} - Student Startup Support Ecosystem`;
};

export const generateMetaDescription = (content: string, maxLength: number = 160) => {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (baseKeywords: string[], pageSpecificKeywords: string[] = []) => {
  const allKeywords = [...baseKeywords, ...pageSpecificKeywords];
  return allKeywords.join(', ');
};

export const baseKeywords = [
  'student entrepreneurs',
  'startup incubation',
  'mentorship',
  'entrepreneurship',
  'student startup support',
  'college entrepreneurship',
  'startup ecosystem India',
  'business incubator',
  'startup accelerator',
  'entrepreneurship education'
];

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

export const generateFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateEventStructuredData = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  organizer: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "location": {
      "@type": "Place",
      "name": event.location
    },
    "organizer": {
      "@type": "Organization",
      "name": event.organizer
    }
  };
};

export const generateArticleStructuredData = (article: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "image": article.image,
    "publisher": {
      "@type": "Organization",
      "name": "Grapreneur",
      "logo": {
        "@type": "ImageObject",
        "url": "https://grapreneur.com/logo.png"
      }
    }
  };
};