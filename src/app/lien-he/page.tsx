'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Vui lòng nhập tên của bạn.' }),
  email: z.string().email({ message: 'Vui lòng nhập địa chỉ email hợp lệ.' }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: 'Vui lòng nhập chủ đề.' }),
  message: z.string().min(10, { message: 'Nội dung tin nhắn phải có ít nhất 10 ký tự.' }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Gửi thành công!',
      description: 'Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể.',
    });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Liên Hệ Với Chúng Tôi</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Chúng tôi luôn sẵn sàng lắng nghe. Vui lòng điền vào biểu mẫu dưới đây hoặc sử dụng thông tin bên cạnh để kết nối.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold font-headline mb-6">Gửi Tin Nhắn</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Họ và Tên</FormLabel>
                        <FormControl>
                          <Input placeholder="Nguyễn Văn A" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Số Điện Thoại (Tùy chọn)</FormLabel>
                          <FormControl>
                            <Input placeholder="0987 654 321" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Chủ Đề</FormLabel>
                        <FormControl>
                          <Input placeholder="Tư vấn về sản phẩm..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nội Dung</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Nội dung tin nhắn của bạn..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full">
                    Gửi Liên Hệ
                  </Button>
                </form>
              </Form>
            </div>
            <div className="space-y-8">
               <div className="bg-card p-8 rounded-lg shadow-lg">
                 <h2 className="text-2xl font-bold font-headline mb-6">Thông Tin Liên Hệ</h2>
                 <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start">
                        <MapPin className="h-6 w-6 mr-4 text-primary mt-1"/>
                        <div>
                            <h3 className="font-semibold text-foreground">Địa chỉ Nhà máy</h3>
                            <p>Lô D, Đường số 2, KCN Long Hậu, Cần Giuộc, Long An, Việt Nam</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Mail className="h-6 w-6 mr-4 text-primary mt-1"/>
                        <div>
                            <h3 className="font-semibold text-foreground">Email</h3>
                            <a href="mailto:info@soosanmotor.com" className="hover:text-primary transition-colors">info@soosanmotor.com</a>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <Phone className="h-6 w-6 mr-4 text-primary mt-1"/>
                        <div>
                            <h3 className="font-semibold text-foreground">Hotline Kinh Doanh</h3>
                            <a href="tel:0987654321" className="hover:text-primary transition-colors">0987 654 321</a>
                        </div>
                    </div>
                 </div>
               </div>
               <div className="bg-card p-8 rounded-lg shadow-lg h-64">
                <h2 className="text-2xl font-bold font-headline mb-4">Bản Đồ</h2>
                <div className="w-full h-full bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Tải bản đồ...</p>
                </div>
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
