import Link from 'next/link';
import { Truck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-8 w-8" />
              <h3 className="font-bold font-headline text-xl">Soosan Vina</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Nhà cung cấp hàng đầu về xe tải đông lạnh, xe cẩu và sơ mi rơ moóc tại Việt Nam.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 font-headline tracking-wide">Sản phẩm</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/san-pham/xe-tai-dong-lanh" className="hover:underline text-primary-foreground/80">Xe Tải Đông Lạnh</Link></li>
              <li><Link href="/san-pham/xe-tai-cau" className="hover:underline text-primary-foreground/80">Xe Tải Cẩu</Link></li>
              <li><Link href="/san-pham/so-mi-ro-mooc" className="hover:underline text-primary-foreground/80">Sơ Mi Rơ Moóc</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 font-headline tracking-wide">Công ty</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/gioi-thieu" className="hover:underline text-primary-foreground/80">Về chúng tôi</Link></li>
              <li><Link href="/tin-tuc" className="hover:underline text-primary-foreground/80">Tin tức</Link></li>
              <li><Link href="/lien-he" className="hover:underline text-primary-foreground/80">Liên hệ</Link></li>
              <li><Link href="/tuyen-dung" className="hover:underline text-primary-foreground/80">Tuyển dụng</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 font-headline tracking-wide">Thông Tin Liên Hệ</h4>
            <address className="text-sm text-primary-foreground/80 not-italic space-y-2">
              <p><strong>Địa chỉ:</strong> Lô D, Đường số 2, KCN Long Hậu, Cần Giuộc, Long An</p>
              <p><strong>Email:</strong> <a href="mailto:info@soosanmotor.com" className="hover:underline">info@soosanmotor.com</a></p>
              <p><strong>Hotline:</strong> <a href="tel:0987654321" className="hover:underline">0987 654 321</a></p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Soosan Vina Motor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
