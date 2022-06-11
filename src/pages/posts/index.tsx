import { GetStaticProps } from 'next'
import Head from 'next/head'
import * as Prismic from '@prismicio/client'

import { getPrismicClient } from '../../providers/prismic'
import styles from './styles-posts.module.scss'
import { PostsProps } from '../../models/postsProps'
import Link from 'next/link'

export default function Posts({ posts }: PostsProps){
    
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map(Post => (
                      <Link key={Post.slug} href={`/posts/${Post.slug}`}>
                      <a>
                         <time>{Post.updatedAt}</time>
                         <strong>{Post.title}</strong>
                         <p>{Post.excerpt}</p>
                      </a>
                      </Link>
                    ))}
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

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
