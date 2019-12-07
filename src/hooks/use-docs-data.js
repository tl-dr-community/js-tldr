import { useState, useEffect } from 'react';
import { loadDocsData } from 'data/loadDocsData';

export const useDocsData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadDocsData();
      setData(data);
    };

    fetchData();
  }, []);

  return data;
};
