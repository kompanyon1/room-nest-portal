import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Loader2 } from 'lucide-react';

interface ContentItem {
  id: string;
  content_key: string;
  content_value: string;
  content_type: string;
  section: string;
  label: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading } = useAuth();
  const { toast } = useToast();
  const [content, setContent] = useState<ContentItem[]>([]);
  const [contentLoading, setContentLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      loadContent();
    }
  }, [user, isAdmin]);

  const loadContent = async () => {
    setContentLoading(true);
    const { data, error } = await supabase
      .from('site_content')
      .select('*')
      .order('section', { ascending: true });

    if (error) {
      toast({
        title: "Ошибка загрузки",
        description: error.message,
        variant: "destructive"
      });
    } else {
      setContent(data || []);
    }
    setContentLoading(false);
  };

  const updateContent = async (id: string, newValue: string) => {
    setSaving(id);
    const { error } = await supabase
      .from('site_content')
      .update({ content_value: newValue })
      .eq('id', id);

    if (error) {
      toast({
        title: "Ошибка сохранения",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Сохранено",
        description: "Изменения успешно сохранены"
      });
      setContent(content.map(item => 
        item.id === id ? { ...item, content_value: newValue } : item
      ));
    }
    setSaving(null);
  };

  const handleImageUpload = async (id: string, file: File) => {
    setSaving(id);
    
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, file);

    if (uploadError) {
      toast({
        title: "Ошибка загрузки",
        description: uploadError.message,
        variant: "destructive"
      });
      setSaving(null);
      return;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    await updateContent(id, publicUrl);
  };

  if (loading || contentLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const groupedContent = content.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = [];
    }
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, ContentItem[]>);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Админ панель</h1>
            <p className="text-muted-foreground">Редактирование контента сайта</p>
          </div>

          {Object.entries(groupedContent).map(([section, items]) => (
            <Card key={section}>
              <CardHeader>
                <CardTitle className="capitalize">{section}</CardTitle>
                <CardDescription>Редактирование раздела {section}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <Label htmlFor={item.content_key}>{item.label}</Label>
                    {item.content_type === 'text' ? (
                      item.content_value.length > 100 ? (
                        <div className="space-y-2">
                          <Textarea
                            id={item.content_key}
                            value={item.content_value}
                            onChange={(e) => {
                              const newContent = [...content];
                              const index = newContent.findIndex(c => c.id === item.id);
                              newContent[index].content_value = e.target.value;
                              setContent(newContent);
                            }}
                            rows={4}
                          />
                          <Button
                            onClick={() => updateContent(item.id, item.content_value)}
                            disabled={saving === item.id}
                            size="sm"
                          >
                            {saving === item.id ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Сохранить'}
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Input
                            id={item.content_key}
                            value={item.content_value}
                            onChange={(e) => {
                              const newContent = [...content];
                              const index = newContent.findIndex(c => c.id === item.id);
                              newContent[index].content_value = e.target.value;
                              setContent(newContent);
                            }}
                          />
                          <Button
                            onClick={() => updateContent(item.id, item.content_value)}
                            disabled={saving === item.id}
                            size="sm"
                          >
                            {saving === item.id ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Сохранить'}
                          </Button>
                        </div>
                      )
                    ) : (
                      <div className="space-y-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageUpload(item.id, file);
                            }
                          }}
                        />
                        {item.content_value && (
                          <img src={item.content_value} alt={item.label} className="max-w-xs rounded-lg" />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
