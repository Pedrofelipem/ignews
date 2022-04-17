import Head from 'next/head'
import Image from 'next/image'
import { SubscribeButton } from '../components/SubscribeButton/SubscribeButton'
import { Homeprops } from '../models/homeProps'
import { stripe } from '../providers/stripe'

import styles from './home.module.scss'

export default function Home({ product }: Homeprops) {
  return (
    <>
      <Head>
        <title>Home | Ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br /> 
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <Image src="/images/avatar.svg" alt="Girl coding" height={500} width={500}/>
      </main>
    </>   
  )
}

export async function getServerSideProps() {

  const price = await stripe.prices.retrieve('price_1Kpeh5FrDuoCRVracBBcyYe2')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    }
  }
}