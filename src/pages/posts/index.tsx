import { GetStaticProps } from 'next'
import Head from 'next/head'
import * as Prismic from '@prismicio/client'

import { getPrimicClient } from '../../providers/prismic'
import styles from './styles-posts.module.scss'

export default function Posts(){
    
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                       <time> 14 de maio de 2022</time>
                       <strong>Further learning: What is the Slice Simulator?</strong>
                       <p>The Slice Simulator is a mini-app that simulates what your Slices will look like
                       in production, using mock data. The Slice Simulator uses an iframe, which runs locally, to simulate your Slices.</p>
                    </a>
                    <a href='#'>
                       <time> 14 de maio de 2022</time>
                       <strong>Further learning: What is the Slice Simulator?</strong>
                       <p>The Slice Simulator is a mini-app that simulates what your Slices will look like
                       in production, using mock data. The Slice Simulator uses an iframe, which runs locally, to simulate your Slices.</p>
                    </a>
                    <a href='#'>
                       <time> 14 de maio de 2022</time>
                       <strong>Further learning: What is the Slice Simulator?</strong>
                       <p>The Slice Simulator is a mini-app that simulates what your Slices will look like
                       in production, using mock data. The Slice Simulator uses an iframe, which runs locally, to simulate your Slices.</p>
                    </a>
                </div>
            </main>
        
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrimicClient();

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'Post')
    ], {
        fetch: ['Post.title', 'Post.content'],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2));
    return{
        props: {}
    }
}
