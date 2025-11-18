import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Truck, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const navItems = [
    { href: "/san-pham", label: "Sản Phẩm" },
    { href: "/tin-tuc", label: "Tin Tức" },
    { href: "/gioi-thieu", label: "Giới Thiệu" },
    { href: "/lien-he", label: "Liên Hệ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Truck className="h-7 w-7 text-primary" />
          <span className="font-bold font-headline text-lg">Soosan Vina</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center flex-1 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-foreground/70 transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-4">
          <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90">Tư Vấn Ngay</Button>
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Mở menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium mt-10">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Truck className="h-7 w-7 text-primary" />
                  <span className="font-bold font-headline text-xl">Soosan Vina</span>
                </Link>
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className="text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="absolute bottom-10 left-6 right-6">
                <Button className="w-full">Tư Vấn Ngay</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
