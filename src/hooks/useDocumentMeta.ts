import { useEffect } from 'react';

interface DocumentMetaOptions {
  title?: string;
  description?: string;
}

/**
 * Simple hook to set document title and meta description.
 * Replaces react-helmet-async to avoid React 19 peer dep conflict.
 */
export function useDocumentMeta({ title, description }: DocumentMetaOptions) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDesc = document.querySelector(
        'meta[name="description"]',
      ) as HTMLMetaElement | null;
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }
  }, [title, description]);
}
