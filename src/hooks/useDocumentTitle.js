import { useEffect } from 'react';

export const useDocumentTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | Luxury Haven Hotel` : 'Luxury Haven Hotel';
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

