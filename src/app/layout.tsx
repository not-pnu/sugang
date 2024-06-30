import type {Metadata} from 'next';
import './globals.css';
import LoadingModal from '@/components/LoadingModal';
import {URL_DATA} from '@/constants/url';


export const metadata: Metadata = {
    metadataBase: new URL(URL_DATA.APP_URL),
    title: '부산대학교 수강신청시스템 아님',
    description: '부산대학교의 수강신청을 연습할 수 있는 모의 수강신청 서비스',
    keywords: '부산대학교, 수강신청, 모의 수강신청, 수강신청 시뮬레이터, 수강신청 연습',
    openGraph: {
        title: '부산대학교 수강신청시스템 아님',
        description: '부산대학교의 수강신청을 연습할 수 있는 모의 수강신청 서비스',
        siteName: '센디 드라이버',
        url: URL_DATA.APP_URL,
        type: 'website',
        images: [{
            url: URL_DATA.APP_URL + '/image/not-pnu-logo.png',
            width: 500,
            height: 500,
        }]
    },
    robots: {
        index: true,
    },

};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <body>
        <div id="root" className="relative">
            {children}
        </div>
        <div id="modal-root"/>
        <LoadingModal/>
        </body>
        </html>
    );
}
