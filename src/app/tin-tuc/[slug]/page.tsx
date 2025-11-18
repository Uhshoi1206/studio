import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

// Dữ liệu giả cho một bài viết chi tiết
const getArticleBySlug = (slug: string) => {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Convert markdown content to basic HTML
  const htmlContent = content.split('\n').map(line => {
    if (line.startsWith('### ')) {
      return `<h3 class="text-2xl font-bold font-headline mt-6 mb-3">${line.substring(4)}</h3>`;
    }
    if (line.startsWith('**')) {
      return `<p class="mb-4 leading-relaxed"><strong>${line.substring(2, line.length - 2)}</strong></p>`;
    }
     if (line.startsWith('*   ')) {
      return `<li class="mb-2 ml-4 list-disc">${line.substring(4)}</li>`;
    }
    if (line.trim() === '') {
      return '';
    }
    return `<p class="mb-4 leading-relaxed">${line}</p>`;
  }).join('');


  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    author: 'Soosan Vina', // Assuming author is static for now
    imageUrl: data.imageUrl,
    imageHint: data.imageHint,
    description: data.description,
    content: htmlContent,
  };
}


export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">404 - Không Tìm Thấy Bài Viết</h1>
            <p className="mt-4">Bài viết bạn đang tìm kiếm không tồn tại.</p>
            <Button asChild className="mt-6">
              <Link href="/tin-tuc">Quay Về Trang Tin Tức</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <article>
            <div className="mb-8">
                <Link href="/tin-tuc" className="inline-flex items-center text-primary hover:underline mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Quay lại danh sách tin tức
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">{article.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{format(new Date(article.date), 'dd/MM/yyyy', { locale: vi })}</span>
                    </div>
                    <div className="flex items-center">
                        <Tag className="mr-2 h-4 w-4" />
                        <span>{article.category}</span>
                    </div>
                    <div className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>{article.author}</span>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden mb-8 shadow-lg">
                <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    data-ai-hint={article.imageHint}
                />
            </div>
            
            <div 
                className="prose prose-lg max-w-none text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }} 
            />

          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
   if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}
