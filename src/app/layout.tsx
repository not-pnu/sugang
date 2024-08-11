import type {Metadata} from 'next';
import './globals.css';
import LoadingModal from '@/components/LoadingModal';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import {generateMetadata} from '@/utils/next';


export const metadata: Metadata = generateMetadata();

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <GoogleTagManager gtmId="GTM-5H9CPNK9" />
        <GoogleAnalytics gaId="G-N92PJFD121" />
        <body className={'relative'}>
        <div id="root" className={'scroll-hidden'}>
            {children}
        </div>
        <div id="modal-root"/>
        <LoadingModal/>
        </body>
        </html>
    );
}
