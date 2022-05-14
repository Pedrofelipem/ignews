import Prismic from '@prismicio/client'
import { config } from 'process';

export function getPrismicClient() {
    const prismic = Prismic.createClient(
        process.env.PRISMIC_ENDPOINT,
        {
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    return prismic;
}