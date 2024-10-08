import type {MetadataRoute} from 'next';
import {URL_DATA} from '@/constants/url';


export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/notice',
                    '/register',
                    '/desired',
                ],
            },
        ],
        sitemap: URL_DATA.APP_URL + '/sitemap.xml',
    };
}