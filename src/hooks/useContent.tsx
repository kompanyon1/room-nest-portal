import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Content {
  [key: string]: string;
}

export const useContent = () => {
  const [content, setContent] = useState<Content>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('content_key, content_value');

      if (error) throw error;

      const contentMap: Content = {};
      data?.forEach((item) => {
        contentMap[item.content_key] = item.content_value;
      });

      setContent(contentMap);
    } catch (error) {
      console.error('Error loading content:', error);
    } finally {
      setLoading(false);
    }
  };

  const get = (key: string, defaultValue: string = '') => {
    return content[key] || defaultValue;
  };

  return { content, loading, get };
};
