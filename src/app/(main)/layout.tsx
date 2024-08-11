import SugangHeader from "@/components/sugang/SugangHeader";
import SugangSidebar from "@/components/sugang/SugangSidebar";

export default function SugangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={'scroll-hidden overflow-y-auto'}>
      <SugangHeader />
      <div className="flex scroll-hidden">
        <SugangSidebar />
        <main className="p-16 w-full scroll-hidden">{children}</main>
      </div>
    </div>
  );
}
