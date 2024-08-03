import { BiNotepad } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa";
import {cls} from '@/utils/util';

export default function SugangSidebar() {
  return (
    <>
      <aside id='sugang-sidebar' className={cls('min-w-210 max-w-210 flex flex-col fixed h-screen z-[10000]',
          'md:hidden')}>
        <ProfileBlock />
        <div className="flex flex-col gap-y-4 h-fit p-16 bg-slate-100 border-b border-2">
          <ScheduleBlock />
          <RestBlock />
        </div>
        <div className="w-full h-full bg-pnuBgGray flex items-center justify-center">
          광고 영역
        </div>
      </aside>
      <div className="min-w-210 h-screen md:hidden" />
    </>
  );
}

function ProfileBlock() {
  return (
    <div className="flex flex-col justify-center items-start py-24 px-20 bg-pnuLightBlue text-white gap-y-2">
      <h1 className="text-2xl">
        홍길동<span className="text-base">(202312345)</span>
      </h1>
      <p className="opacity-50 text-sm">
        공과대학 · 전기컴퓨터공학부 · 4학년 · 학사
      </p>
    </div>
  );
}

function ScheduleBlock() {
  return (
    <div className="bg-green-600 py-8 px-16 text-white rounded-md relative">
      <p className="text-sm">2024학년도 1학기</p>
      <p className="">수강신청(학부)</p>
      <BiNotepad
        color="white"
        className="opacity-50 absolute bottom-2 right-2"
        size={28}
      />
    </div>
  );
}

function RestBlock() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col">
        <div className="flex items-center">
          <label className="text-pnuText">취득학점</label>
          <div className="flex text-green-600 ml-auto font-bold">999.0</div>
        </div>
        <div className="flex items-center">
          <label className="text-pnuText">수강신청가능학점</label>
          <div className="flex text-green-600 ml-auto font-bold">9999.0</div>
        </div>
      </div>
      <hr className="border-dashed border-1 border-gray-400" />
      <div className="flex flex-col text-sm">
        <div className="flex items-center">
          <FaCalendarCheck color="gray" className="mr-8" />
          <label className="text-pnuText font-bold">수강신청(학부) 기간</label>
        </div>
        <p className="text-gray-500 ml-30">2099-02-01(화) 08:00:00</p>
        <p className="text-gray-500 ml-30">~ 2099-03-01(화) 09:00:00</p>
      </div>
    </div>
  );
}
