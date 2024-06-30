"use client";

import Link from "next/link";
import TitleLogo from "../TitleLogo";
import { usePathname } from "next/navigation";
import { SlStar } from "react-icons/sl";
import {URL_DATA} from '@/constants/url';

export default function SugangHeader() {
  const pathname = usePathname();
  return (
    <>
      <header className="flex bg-pnuBlue h-45 items-center px-16 fixed top-0 left-0 right-0 w-full z-[10000] text-nowrap">
        <TitleLogo />
        <nav>
          <ul className="hidden sm:flex gap-x-12 ml-100">
            <li
              className={
                pathname === "/register"
                  ? "text-lg text-green-300 underline font-bold"
                  : "text-lg text-white"
              }
            >
              <Link href="/register">수강신청</Link>
            </li>
            <li
              className={
                pathname === "/notice"
                  ? "text-lg text-green-300 underline font-bold"
                  : "text-lg text-white"
              }
            >
              <Link href="/notice">공지사항</Link>
            </li>
            <li className="text-lg text-white">학생기본정보</li>
            <li className="text-lg text-white">게시판</li>
            <li
              className={
                pathname === "/desired"
                  ? "text-lg text-green-300 underline font-bold"
                  : "text-lg text-white"
              }
            >
              <Link href="/desired">희망과목담기</Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto overflow-hidden w-500 relative animate-sparkling">
          <a href={URL_DATA.APP_URL} target="_blank">
            <p className="animate-slide-infinite text-white text-nowrap font-mono flex items-center gap-x-2">
              <SlStar />
              학과 홈페이지 소식을 뉴스레터로! MailBadara 구독 ㄱㄱ!
              <SlStar />
            </p>
          </a>
        </div>
        <Link href="/" className="ml-auto">
          <button className="text-sm bg-pnuWarn rounded-md px-8 py-2 text-white">
            로그아웃
          </button>
        </Link>
      </header>
      <div className="h-45 w-full" />
    </>
  );
}
