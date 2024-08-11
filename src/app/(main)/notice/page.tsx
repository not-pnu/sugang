import NoticeSection1 from "@/components/notice/NoriceSection1";
import {generateMetadata} from '@/utils/next';

export const metadata = generateMetadata('공지사항')

export default function NoticePage() {
  return (
    <div className="w-full h-full flex flex-col gap-y-8 items-center scroll-hidden">
      <NoticeSection1 />
    </div>
  );
}
