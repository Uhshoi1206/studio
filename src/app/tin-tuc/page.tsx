import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, Tag } from 'lucide-react';

const newsItems = [
  {
    slug: 'soosan-ra-mat-dong-xe-tai-cau-moi-2024',
    title: 'Soosan Vina Ra Mắt Dòng Xe Tải Cẩu Mới 2024',
    date: '15/07/2024',
    category: 'Sản phẩm mới',
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-crane-1')?.imageUrl || '',
    imageHint: 'crane truck',
    description: 'Dòng xe tải cẩu mới của Soosan Vina hứa hẹn mang lại hiệu suất vượt trội và độ tin cậy cao, đáp ứng nhu cầu ngày càng tăng của ngành xây dựng và vận tải.',
  },
  {
    slug: 'huong-dan-bao-duong-xe-tai-dong-lanh',
    title: 'Hướng Dẫn Bảo Dưỡng Hệ Thống Lạnh Trên Xe Tải',
    date: '10/07/2024',
    category: 'Tư vấn kỹ thuật',
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-fridge-1')?.imageUrl || '',
    imageHint: 'refrigerated truck',
    description: 'Để đảm bảo xe tải đông lạnh hoạt động ổn định và giữ chất lượng hàng hóa, việc bảo dưỡng hệ thống lạnh định kỳ là vô cùng quan trọng. Dưới đây là các bước bạn cần biết.',
  },
  {
    slug: 'quy-dinh-moi-ve-tai-trong-xe-so-mi-ro-mooc',
    title: 'Quy Định Mới Về Tải Trọng Đối Với Sơ Mi Rơ Moóc',
    date: '05/07/2024',
    category: 'Tin tức ngành',
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-trailer-1')?.imageUrl || '',
    imageHint: 'semi trailer',
    description: 'Cập nhật những thay đổi quan trọng trong quy định về tải trọng cho xe sơ mi rơ moóc, giúp các doanh nghiệp vận tải tuân thủ đúng pháp luật và hoạt động hiệu quả.',
  },
];

export default function NewsPage() {
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
                           {item.date}
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
