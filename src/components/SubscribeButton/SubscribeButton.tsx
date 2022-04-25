import { signIn, useSession } from 'next-auth/react';
import { SubscribeButtonProps } from '../../models/subscribeButtonProps';
import styles from './styles-subscribeButton.module.scss'

export function SubscribeButton({ priceId }: SubscribeButtonProps) {

    const {data : session} = useSession();

    function hendleSubscribe() {
        if(!session) {
            signIn('github')
            return;
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