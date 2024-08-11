import { Metadata } from 'next';
import {URL_DATA} from '@/constants/url';

export function generateMetadata(_title?: string, _description?: string, _keywords?: string): Metadata {
    let title = '부산대학교 수강신청시스템 아님';
    if (_title) {
        title = `부산대학교 수강신청시스템 아님 - ${_title}`;
    }

    return  {
        metadataBase: new URL(URL_DATA.APP_URL),
        title: title,
        description: '부산대학교의 수강신청을 연습할 수 있는 모의 수강신청 서비스',
        keywords: '부산대학교, 수강신청, 모의 수강신청, 수강신청 시뮬레이터, 수강신청 연습',
        openGraph: {
            title: '부산대학교 수강신청시스템 아님',
            description: '부산대학교의 수강신청을 연습할 수 있는 모의 수강신청 서비스',
            siteName: '부산대학교 수강신청시스템 아님',
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
            follow: true,
        },
    };
}
