import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const productCategories = [
  {
    slug: 'xe-tai-dong-lanh',
    title: 'Xe Tải Đông Lạnh',
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-fridge-1')?.imageUrl || '',
    imageHint: 'refrigerated truck',
    description: 'Các dòng xe tải đông lạnh với công nghệ làm lạnh tiên tiến, đảm bảo hàng hóa luôn được bảo quản ở nhiệt độ lý tưởng trong suốt quá trình vận chuyển.',
  },
  {
    slug: 'xe-tai-cau',
    title: 'Xe Tải Cẩu',
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-crane-1')?.imageUrl || '',
    imageHint: 'crane truck',
    description: 'Cung cấp các loại xe tải gắn cẩu tự hành Soosan mạnh mẽ, linh hoạt và bền bỉ, phục vụ hiệu quả cho ngành xây dựng, logistics và nhiều lĩnh vực khác.',
  },
  {
    slug: 'so-mi-ro-mooc',
    title: 'Sơ Mi Rơ Moóc',
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-trailer-1')?.imageUrl || '',
    imageHint: 'semi trailer',
    description: 'Giải pháp vận chuyển hàng hóa khối lượng lớn với các loại sơ mi rơ moóc chất lượng cao, thiết kế đa dạng để đáp ứng mọi nhu cầu vận tải đường dài.',
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Danh Mục Sản Phẩm</h1>
              <p className="mt-4 text-lg text-muted-foreground">Khám phá các giải pháp vận tải chuyên nghiệp của Soosan Vina.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {productCategories.map((category) => (
                <Card key={category.slug} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                  <CardHeader className="p-0">
                    <Link href={`/san-pham/${category.slug}`} className="block relative h-64">
                      <Image
                        src={category.imageUrl}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        data-ai-hint={category.imageHint}
                      />
                    </Link>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-1">
                    
                    <CardTitle className="text-2xl font-bold font-headline mb-3">
                      <Link href={`/san-pham/${category.slug}`} className="hover:text-primary transition-colors">
                        {category.title}
                      </Link>
                    </CardTitle>
                    <p className="text-muted-foreground flex-grow mb-4">{category.description}</p>
                    <Button asChild variant="link" className="p-0 h-auto mt-auto self-start text-primary font-bold">
                       <Link href={`/san-pham/${category.slug}`}>
                        Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
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
