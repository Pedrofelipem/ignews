import { GetStaticProps } from 'next'
import Head from 'next/head'
import * as Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import * as prismicH from '@prismicio/helpers'

import { getPrimicClient } from '../../providers/prismic'
import styles from './styles-posts.module.scss'
import { PostsProps } from '../../models/postsProps'

export default function Posts({ posts }: PostsProps){
    
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map(Post => (
                      <a href='#' key={Post.slug}>
                         <time>{Post.updatedAt}</time>
                         <strong>{Post.title}</strong>
                         <p>{Post.excerpt}</p>
                      </a>
                    ))}
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
    
    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: post.data.title,
            excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR',{
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })
    
    return{
        props: {
            posts
        }
    }
}
