import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Calendar, Tag } from 'lucide-react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  imageHint: string;
  description: string;
};

function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      imageUrl: data.imageUrl,
      imageHint: data.imageHint,
      description: data.description,
    } as Post;
  });

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function NewsPage() {
  const newsItems = getPosts();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Tin Tức & Sự Kiện</h1>
              <p className="mt-4 text-lg text-muted-foreground">Cập nhật thông tin mới nhất từ Soosan Vina và ngành vận tải.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <Card key={item.slug} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                  <CardHeader className="p-0">
                    <Link href={`/tin-tuc/${item.slug}`} className="block relative h-56">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={item.imageHint}
                      />
                    </Link>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                       <div className="flex items-center">
                           <Tag className="mr-1.5 h-4 w-4" />
                           {item.category}
                       </div>
                       <div className="flex items-center">
                           <Calendar className="mr-1.5 h-4 w-4" />
                           {format(new Date(item.date), 'dd/MM/yyyy', { locale: vi })}
                       </div>
                    </div>
                    <h2 className="text-xl font-bold font-headline h-14 mb-2">
                      <Link href={`/tin-tuc/${item.slug}`} className="hover:text-primary transition-colors">
                        {item.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
                    <Button asChild variant="link" className="p-0 h-auto mt-4 self-start text-primary">
                       <Link href={`/tin-tuc/${item.slug}`}>
                        Đọc tiếp &rarr;
                       </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
