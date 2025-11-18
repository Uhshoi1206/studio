import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Wrench, Newspaper } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-truck');
  const products = PlaceHolderImages.filter(p => p.id.startsWith('product-'));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[70vh]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/40 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-primary-foreground pb-16 md:pb-24 px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg">Soosan Vina Motor</h1>
            <p className="mt-4 text-lg md:text-2xl max-w-3xl drop-shadow-md">
              Giải pháp vận tải chuyên nghiệp - Xe tải đông lạnh, xe cẩu, và sơ mi rơ moóc chất lượng hàng đầu.
            </p>
            <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
              Khám Phá Sản Phẩm
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Vì Sao Chọn Soosan Vina?</h2>
              <p className="mt-4 text-lg text-muted-foreground">Chúng tôi cam kết mang đến những sản phẩm và dịch vụ vượt trội, đáp ứng mọi nhu cầu của bạn.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center p-6 rounded-lg transition-all hover:bg-card hover:shadow-lg">
                <div className="p-4 bg-primary rounded-full">
                  <Truck className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mt-4 text-xl font-headline font-bold">Sản Phẩm Đa Dạng</h3>
                <p className="mt-2 text-muted-foreground">Cung cấp đầy đủ các dòng xe chuyên dụng được thiết kế tối ưu cho hiệu suất và độ bền.</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-lg transition-all hover:bg-card hover:shadow-lg">
                <div className="p-4 bg-primary rounded-full">
                  <Wrench className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mt-4 text-xl font-headline font-bold">Dịch Vụ Uy Tín</h3>
                <p className="mt-2 text-muted-foreground">Đội ngũ kỹ thuật viên chuyên nghiệp, bảo hành, bảo dưỡng tận tâm và phụ tùng chính hãng.</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-lg transition-all hover:bg-card hover:shadow-lg">
                <div className="p-4 bg-primary rounded-full">
                  <Newspaper className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mt-4 text-xl font-headline font-bold">Tin Tức Ngành</h3>
                <p className="mt-2 text-muted-foreground">Luôn cập nhật những thông tin, xu hướng và quy định mới nhất trong ngành vận tải.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Sản Phẩm Nổi Bật</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.slice(0, 3).map((product) => (
                <Card key={product.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader className="p-0">
                    <div className="relative h-56">
                      <Image
                        src={product.imageUrl}
                        alt={product.description}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={product.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl h-14">{product.description}</CardTitle>
                    <p className="text-muted-foreground mt-2">Giá: <span className="font-bold text-primary">Liên hệ</span></p>
                    <Button variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Xem Chi Tiết
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" variant="link" className="text-primary text-lg">
                Xem tất cả sản phẩm &rarr;
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
