import { useState, useEffect } from 'react';
import { loadDocsData } from 'data/loadDocsData';

type SearchIndexEntry = {
  body: string;
  category: 'methods';
  name: string;
  path: string;
  searchString: string;
};
type SearchIndex = SearchIndexEntry[];
export const useDocsData = () => {
  const [data, setData] = useState<null | SearchIndex>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadDocsData();
        setData(data);
      } catch (requestError) {
        setError(requestError);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchData();
  }, []);

  return { data, loading, error };
};
