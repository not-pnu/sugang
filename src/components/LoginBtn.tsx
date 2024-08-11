"use client";

import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google'



export default function LoginBtn() {
    const onClick = () => {
        sendGAEvent({
            event: 'buttonClicked',
            value: 'start-sugang',
        });
    }

    return (
        <Link href="/notice" onClick={onClick} className="bg-pnuBlue text-white px-48 h-90 rounded md:px-16 md:h-60 md:w-full md:mt-24 flex justify-center items-center">
            로그인
        </Link>
    )
}