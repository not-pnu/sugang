import SubjectApplyDetails from "@/components/sugang/SubjectApplyDetails";
import SugangNavbarMenu from "@/components/sugang/SugangNavbarMenu";
import SugangSearchBar from "@/components/sugang/SugangSearchBar";
import {generateMetadata} from '@/utils/next';

export const metadata = generateMetadata('수강신청')

export default function RegisterPage() {
  return (
    <div className="w-full h-full flex flex-col gap-y-8 scroll-hidden">
      <SugangSearchBar />
      <div className="p-0">
        <SugangNavbarMenu />
      </div>
      <SubjectApplyDetails />
    </div>
  );
}
