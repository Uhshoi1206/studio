import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const refrigeratedTrucks = [
    {
        id: 'hyundai-h150',
        name: 'Xe Tải Đông Lạnh Hyundai H150',
        description: 'Tải trọng 1.5 tấn, linh hoạt trong thành phố. Hệ thống làm lạnh hiệu suất cao, giữ nhiệt tốt, phù hợp vận chuyển thực phẩm, dược phẩm.',
        imageUrl: PlaceHolderImages.find(p => p.id === 'product-fridge-1')?.imageUrl || '',
        imageHint: 'small refrigerated truck'
    },
    {
        id: 'hino-3-5t',
        name: 'Xe Tải Đông Lạnh Hino 3.5 Tấn',
        description: 'Dòng xe bền bỉ, tiết kiệm nhiên liệu từ Nhật Bản. Thùng xe rộng rãi, khả năng làm lạnh sâu, đáp ứng tiêu chuẩn vận tải hàng hóa khắt khe.',
        imageUrl: PlaceHolderImages.find(p => p.id === 'product-fridge-2')?.imageUrl || '',
        imageHint: 'medium refrigerated truck'
    },
    {
        id: 'isuzu-5t',
        name: 'Xe Tải Đông Lạnh Isuzu 5 Tấn',
        description: 'Giải pháp vận tải hàng hóa số lượng lớn. Động cơ mạnh mẽ, khung gầm chắc chắn, hệ thống lạnh ổn định, đảm bảo an toàn cho hàng hóa giá trị cao.',
        imageUrl: PlaceHolderImages.find(p => p.id === 'product-fridge-3')?.imageUrl || '',
        imageHint: 'large refrigerated truck'
    }
];


export default function RefrigeratedTrucksPage() {
    const categoryImage = PlaceHolderImages.find(p => p.id === 'product-fridge-1');

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1">
                <section className="relative w-full h-[40vh] bg-card">
                    {categoryImage && (
                        <Image
                            src={categoryImage.imageUrl}
                            alt="Xe tải đông lạnh"
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={categoryImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline drop-shadow-lg">Xe Tải Đông Lạnh</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
                            Giải pháp bảo quản và vận chuyển hàng hóa nhạy cảm với nhiệt độ.
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
                                    <BreadcrumbPage>Xe Tải Đông Lạnh</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {refrigeratedTrucks.map((product) => (
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