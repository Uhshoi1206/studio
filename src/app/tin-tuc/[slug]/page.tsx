import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, ArrowLeft, User } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

// Dữ liệu giả cho một bài viết chi tiết
const getArticleBySlug = (slug: string) => {
  const articles = [
    {
      slug: 'soosan-ra-mat-dong-xe-tai-cau-moi-2024',
      title: 'Soosan Vina Ra Mắt Dòng Xe Tải Cẩu Mới 2024',
      date: '15/07/2024',
      category: 'Sản phẩm mới',
      author: 'Soosan Vina',
      imageUrl: PlaceHolderImages.find(p => p.id === 'product-crane-1')?.imageUrl || '',
      imageHint: 'crane truck',
      description: 'Dòng xe tải cẩu mới của Soosan Vina hứa hẹn mang lại hiệu suất vượt trội và độ tin cậy cao, đáp ứng nhu cầu ngày càng tăng của ngành xây dựng và vận tải.',
      content: `
        <p class="mb-4 leading-relaxed">Hôm nay, Soosan Vina Motor, một trong những nhà sản xuất và lắp ráp xe chuyên dùng hàng đầu Việt Nam, đã chính thức công bố ra mắt dòng xe tải gắn cẩu tự hành thế hệ mới năm 2024. Sự kiện này đánh dấu một bước tiến quan trọng trong việc áp dụng công nghệ tiên tiến và thiết kế hiện đại vào các sản phẩm của công ty, nhằm đáp ứng tốt hơn nhu cầu đa dạng của thị trường.</p>
        <p class="mb-4 leading-relaxed">Dòng xe tải cẩu mới được trang bị động cơ Euro 5 mạnh mẽ, tiết kiệm nhiên liệu và thân thiện với môi trường. Hệ thống cẩu Soosan được cải tiến với khả năng nâng và tầm vươn vượt trội, cùng với các tính năng an toàn tiên tiến như hệ thống cân bằng tải trọng và cảnh báo quá tải, đảm bảo an toàn tối đa cho người vận hành và hàng hóa.</p>
        <h3 class="text-2xl font-bold font-headline mt-6 mb-3">Thiết Kế Tối Ưu Cho Hiệu Suất</h3>
        <p class="mb-4 leading-relaxed">Thùng xe được thiết kế và sản xuất từ vật liệu cao cấp, có khả năng chịu tải cao và chống ăn mòn hiệu quả. Thiết kế thông minh giúp tối ưu hóa không gian chứa hàng và dễ dàng trong việc bốc dỡ. Cabin xe cũng được chú trọng với không gian rộng rãi, tiện nghi, mang lại sự thoải mái cho tài xế trên những chặng đường dài.</p>
        <p class="mb-4 leading-relaxed">Phát biểu tại buổi lễ, ông Nguyễn Văn An, Tổng Giám đốc Soosan Vina Motor, chia sẻ: "Với dòng sản phẩm mới này, chúng tôi không chỉ muốn mang đến một công cụ làm việc hiệu quả, mà còn là một người bạn đồng hành đáng tin cậy cho mọi doanh nghiệp. Chúng tôi cam kết tiếp tục nghiên cứu và phát triển để mang lại những giải pháp vận tải tốt nhất cho khách hàng."</p>
      `
    },
    // Add other articles here if needed
  ];
  return articles.find(a => a.slug === slug);
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
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{article.date}</span>
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
