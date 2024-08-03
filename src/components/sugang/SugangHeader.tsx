'use client';

import Link from 'next/link';
import TitleLogo from '../TitleLogo';
import {usePathname} from 'next/navigation';
import {SlStar} from 'react-icons/sl';
import {FaBars} from 'react-icons/fa'; // 햄버거 및 닫기 아이콘
import {useState} from 'react'; // useState 훅
import {URL_DATA} from '@/constants/url';


export default function SugangHeader() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false); // 메뉴 열림 상태

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // 메뉴 열림/닫힘 상태 토글
    };

    return (
        <>
            <header
                className="flex bg-pnuBlue h-45 items-center px-4 md:px-16 fixed top-0 left-0 right-0 w-full z-[10000] text-nowrap">
                <TitleLogo/>
                {/* Desktop navigation */}
                <nav className="md:hidden flex ml-auto relativee">
                    <ul className="flex gap-x-12 md:ml-100">
                        <li
                            className={
                                pathname === '/register'
                                    ? 'text-lg text-green-300 underline font-bold'
                                    : 'text-lg text-white'
                            }
                        >
                            <Link href="/register">수강신청</Link>
                        </li>
                        <li
                            className={
                                pathname === '/notice'
                                    ? 'text-lg text-green-300 underline font-bold'
                                    : 'text-lg text-white'
                            }
                        >
                            <Link href="/notice">공지사항</Link>
                        </li>
                        <li className="text-lg text-white">학생기본정보</li>
                        <li className="text-lg text-white">게시판</li>
                        <li
                            className={
                                pathname === '/desired'
                                    ? 'text-lg text-green-300 underline font-bold'
                                    : 'text-lg text-white'
                            }
                        >
                            <Link href="/desired">희망과목담기</Link>
                        </li>
                    </ul>
                </nav>
                <FaBars size={24}
                        className={'hidden md:block ml-auto'}
                        color={'white'}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"/>

                {/* Sparkling text (desktop only) */}
                <div className="md:hidden block ml-auto overflow-hidden w-500 relative animate-sparkling">
                    <a href={URL_DATA.APP_URL} target="_blank" rel="noopener noreferrer">
                        <p className="animate-slide-infinite text-white text-nowrap font-mono flex items-center gap-x-2">
                            <SlStar/>
                            학과 홈페이지 소식을 뉴스레터로! MailBadara 구독 ㄱㄱ!
                            <SlStar/>
                        </p>
                    </a>
                </div>

                {/* Logout button (desktop only) */}
                <Link href="/" className="md:hidden block ml-auto">
                    <button className="text-sm bg-pnuWarn rounded-md px-8 py-2 text-white">
                        로그아웃
                    </button>
                </Link>
            </header>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="hidden md:block absolute bg-pnuBlue text-white w-full py-4 px-4 z-[9999]">
                    <ul className="flex flex-col gap-y-4 my-4 px-8">
                        <li
                            className={
                                pathname === '/register'
                                    ? 'text-lg text-green-300 underline font-bold'
                                    : 'text-lg'
                            }
                        >
                            <Link href="/register" onClick={toggleMenu}>
                                수강신청
                            </Link>
                        </li>
                        <li
                            className={
                                pathname === '/notice'
                                    ? 'text-lg text-green-300 underline font-bold'
                                    : 'text-lg'
                            }
                        >
                            <Link href="/notice" onClick={toggleMenu}>
                                공지사항
                            </Link>
                        </li>
                        <li className="text-lg">학생기본정보</li>
                        <li className="text-lg">게시판</li>
                        <li
                            className={
                                pathname === '/desired'
                                    ? 'text-lg text-green-300 underline font-bold'
                                    : 'text-lg'
                            }
                        >
                            <Link href="/desired" onClick={toggleMenu}>
                                희망과목담기
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            <div className="h-45 w-full"/>
        </>
    );
}