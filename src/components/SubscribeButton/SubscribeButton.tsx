import { signIn, useSession } from 'next-auth/react';
import { SubscribeButtonProps } from '../../models/subscribeButtonProps';
import { api } from '../../providers/api';
import { getStripeJs } from '../../providers/stripe-js';
import styles from './styles-subscribeButton.module.scss'

export function SubscribeButton({ priceId }: SubscribeButtonProps) {

    const {data : session} = useSession();

    async function hendleSubscribe() {
        if(!session) {
            signIn('github')
            return;
        }

        try{
            const response = await api.post('/subscribe')

            const { sessionId } = response.data

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout( {sessionId : sessionId} )
        }catch (err) {
            alert(err.message)
        }
    }
    
    return(
        <button 
            type="button"
            className={styles.subscribeButton}
            onClick={hendleSubscribe}
        >
            Subscribe now
        </button>
    );
}