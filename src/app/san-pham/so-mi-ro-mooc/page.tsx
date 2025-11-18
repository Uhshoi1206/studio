import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const trailers = [
    {
        id: 'trailer-reefer',
        name: 'Sơ Mi Rơ Moóc Đông Lạnh',
        description: 'Vận chuyển hàng hóa cần kiểm soát nhiệt độ với rơ moóc đông lạnh công nghệ cao, đảm bảo chuỗi cung ứng lạnh không bị gián đoạn.',
        imageUrl: PlaceHolderImages.find(p => p.id === 'product-trailer-1')?.imageUrl || '',
        imageHint: 'reefer trailer'
    },
    {
        id: 'trailer-flatbed',
        name: 'Sơ Mi Rơ Moóc Sàn',
        description: 'Linh hoạt vận chuyển các loại hàng hóa đa dạng, từ vật liệu xây dựng đến máy móc công nghiệp. Khung gầm chắc chắn, chịu tải tốt.',
        imageUrl: PlaceHolderImages.find(p => p.id === 'product-trailer-2')?.imageUrl || '',
        imageHint: 'flatbed trailer'
    },
    {
        id: 'trailer-chassis',
        name: 'Sơ Mi Rơ Moóc Xương (Chở Container)',
        description: 'Thiết kế chuyên dụng để vận chuyển container 20-40 feet. Kết cấu vững chãi, tối ưu hóa cho logistics cảng biển và nội địa.',
        imageUrl: PlaceHolderImages.find(p => p.id === 'product-trailer-3')?.imageUrl || '',
        imageHint: 'container trailer'
    }
];


export default function TrailersPage() {
    const categoryImage = PlaceHolderImages.find(p => p.id === 'product-trailer-1');

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1">
                <section className="relative w-full h-[40vh] bg-card">
                    {categoryImage && (
                        <Image
                            src={categoryImage.imageUrl}
                            alt="Sơ mi rơ moóc"
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={categoryImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline drop-shadow-lg">Sơ Mi Rơ Moóc</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
                            Giải pháp vận tải hàng hóa khối lượng lớn hiệu quả và linh hoạt.
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
                                    <BreadcrumbPage>Sơ Mi Rơ Moóc</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {trailers.map((product) => (
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