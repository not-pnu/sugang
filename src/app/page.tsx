import HomeHeader from "@/components/HomeHeader";
import HomeInput from "@/components/home/HomeInput";
import Link from "next/link";
import {cls} from '@/utils/util';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="flex min-h-screen flex-col p-16 items-center gap-y-20">
        <h2 className="text-3xl font-bold text-pnuText mt-32 text-center">
          2024학년도 <br className='hidden md:block' />1학기 수강신청
        </h2>
        <form className={cls('shadow-[0_0_8px_2px_rgba(0,0,0,0.2)] rounded-8 min-w-600 py-60 gap-x-4 flex justify-center',
            'md:min-w-full md:flex-col md:items-center md:p-24')}>
          <div className="flex flex-col gap-y-4 md:w-full">
            <HomeInput label="ID" placeholder="학번 필요없음" type="text" />
            <HomeInput
              label="Password"
              placeholder="비밀번호 필요없음"
              type="password"
            />
            {/*<div className="flex gap-x-4">*/}
            {/*  <label className="font-bold text-pnuText text-end">*/}
            {/*    Language*/}
            {/*  </label>*/}
            {/*  <div className="flex text-pnuText">국문 / 영어</div>*/}
            {/*</div>*/}
          </div>
          <Link href="/notice" className="bg-pnuBlue text-white px-48 h-90 rounded md:px-16 md:h-60 md:w-full md:mt-24 flex justify-center items-center">
              로그인
          </Link>
        </form>
      </main>
    </>
  );
}
