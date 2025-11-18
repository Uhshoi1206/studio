import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Target, Users, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'about-hero');
  const values = [
    {
      icon: Award,
      title: 'Chất Lượng Hàng Đầu',
      description: 'Chúng tôi cam kết cung cấp những sản phẩm đạt tiêu chuẩn quốc tế, bền bỉ và đáng tin cậy.',
      image: PlaceHolderImages.find(p => p.id === 'value-quality')
    },
    {
      icon: Target,
      title: 'Đổi Mới Không Ngừng',
      description: 'Luôn tiên phong áp dụng công nghệ mới để tạo ra các giải pháp vận tải tối ưu và hiệu quả.',
      image: PlaceHolderImages.find(p => p.id === 'value-innovation')
    },
    {
      icon: Users,
      title: 'Khách Hàng Là Trọng Tâm',
      description: 'Sự hài lòng của khách hàng là ưu tiên số một trong mọi hoạt động của chúng tôi.',
      image: PlaceHolderImages.find(p => p.id === 'value-customer')
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] bg-card">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg">Về Soosan Vina Motor</h1>
            <p className="mt-4 text-lg md:text-2xl max-w-3xl drop-shadow-md">
              Hành trình trở thành nhà cung cấp giải pháp vận tải hàng đầu Việt Nam.
            </p>
          </div>
        </section>
        
        {/* Company Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-8">Câu Chuyện Của Chúng Tôi</h2>
              <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
                  <p>
                      Được thành lập với sứ mệnh mang đến những giải pháp vận tải chuyên dụng chất lượng cao, Soosan Vina Motor đã không ngừng nỗ lực để khẳng định vị thế trên thị trường. Chúng tôi tự hào là đơn vị lắp ráp và phân phối chính thức các dòng xe tải gắn cẩu Soosan, xe đông lạnh và sơ mi rơ moóc, phục vụ cho sự phát triển của ngành logistics và xây dựng tại Việt Nam.
                  </p>
                  <p>
                      Với nhà máy hiện đại đặt tại Long An và đội ngũ kỹ sư, công nhân lành nghề, mỗi sản phẩm xuất xưởng đều trải qua quy trình kiểm tra chất lượng nghiêm ngặt. Chúng tôi tin rằng sự bền bỉ, hiệu suất và an toàn của xe là nền tảng cho thành công của khách hàng.
                  </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Giá Trị Cốt Lõi</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value) => {
                        const Icon = value.icon;
                        return (
                            <Card key={value.title} className="text-center p-8 border-0 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                                <CardContent className="flex flex-col items-center">
                                    <div className="p-4 bg-primary rounded-full mb-4">
                                        <Icon className="h-8 w-8 text-primary-foreground" />
                                    </div>
                                    <h3 className="text-xl font-bold font-headline mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Cam Kết Của Chúng Tôi</h2>
              <p className="text-lg text-muted-foreground mb-8">Soosan Vina không chỉ bán một sản phẩm, chúng tôi mang đến một giải pháp toàn diện và sự đồng hành dài lâu.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-4 p-4">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                      <div>
                          <h4 className="font-bold">Chất lượng sản phẩm vượt trội</h4>
                          <p className="text-muted-foreground text-sm">Sản phẩm được lắp ráp từ linh kiện chính hãng, đảm bảo độ bền và hiệu suất cao nhất.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4 p-4">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                      <div>
                          <h4 className="font-bold">Dịch vụ hậu mãi tận tâm</h4>
                          <p className="text-muted-foreground text-sm">Hệ thống bảo hành, bảo dưỡng chuyên nghiệp trên toàn quốc, phụ tùng luôn sẵn có.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4 p-4">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                      <div>
                          <h4 className="font-bold">Giải pháp tài chính linh hoạt</h4>
                          <p className="text-muted-foreground text-sm">Hỗ trợ khách hàng với các chương trình trả góp ưu đãi từ nhiều ngân hàng uy tín.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4 p-4">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                      <div>
                          <h4 className="font-bold">Tư vấn chuyên nghiệp</h4>
                          <p className="text-muted-foreground text-sm">Đội ngũ tư vấn giàu kinh nghiệm giúp bạn chọn được sản phẩm phù hợp nhất với nhu cầu.</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
