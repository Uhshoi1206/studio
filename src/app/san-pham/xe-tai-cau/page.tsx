import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const craneTrucks = [
    {
        id: 'soosan-scs333',
        name: 'Xe Tải Gắn Cẩu Soosan 3 Tấn SCS333',
        description: 'Cẩu 3 tấn nhỏ gọn, linh hoạt, phù hợp cho các công việc trong không gian hẹp, cần sự nhanh nhẹn. Lắp đặt trên các nền xe tải nhẹ.',
        imageUrl: PlaceHolderImages.find(p => p.id === 'product-crane-1')?.imageUrl || '',
        imageHint: 'small crane truck'
    },
    {
        id: 'soosan-scs524',
        name: 'Xe Tải Gắn Cẩu Soosan 5 Tấn SCS524',
        description: 'Dòng cẩu hạng trung phổ biến, sức nâng 5 tấn, kết hợp hoàn hảo giữa sức mạnh và tầm với. Lý tưởng cho xây dựng và bốc dỡ hàng hóa.',
        imageUrl: PlaceHolderImages.find(p => p.id === 'product-crane-2')?.imageUrl || '',
        imageHint: 'medium crane truck'
    },
    {
        id: 'soosan-scs746',
        name: 'Xe Tải Gắn Cẩu Soosan 7 Tấn SCS746',
        description: 'Cẩu hạng nặng 7 tấn với 6 đoạn, tầm vươn xa, sức nâng vượt trội. Giải pháp tối ưu cho các công trình lớn và hàng hóa nặng.',
        imageUrl: PlaceHolderImages.find(p => p.id === 'product-crane-3')?.imageUrl || '',
        imageHint: 'large crane truck'
    }
];


export default function CraneTrucksPage() {
    const categoryImage = PlaceHolderImages.find(p => p.id === 'product-crane-1');

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1">
                <section className="relative w-full h-[40vh] bg-card">
                    {categoryImage && (
                        <Image
                            src={categoryImage.imageUrl}
                            alt="Xe tải cẩu"
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={categoryImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline drop-shadow-lg">Xe Tải Cẩu</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
                            Sức mạnh và sự linh hoạt cho mọi công trình và nhu cầu vận tải.
                        </p>
                    </div>
                </section>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <Breadcrumb className="mb-8">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Trang Chủ</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/san-pham">Sản Phẩm</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Xe Tải Cẩu</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {craneTrucks.map((product) => (
                                <Card key={product.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                                    <CardHeader className="p-0">
                                        <div className="relative h-56">
                                            <Image
                                                src={product.imageUrl}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                data-ai-hint={product.imageHint}
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6 flex flex-col flex-1">
                                        <CardTitle className="font-headline text-xl mb-2 h-14">{product.name}</CardTitle>
                                        <p className="text-muted-foreground text-sm flex-grow mb-4">{product.description}</p>
                                        <p className="text-muted-foreground mt-2">Giá: <span className="font-bold text-primary">Liên hệ</span></p>
                                        <Button variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                            Yêu Cầu Báo Giá
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