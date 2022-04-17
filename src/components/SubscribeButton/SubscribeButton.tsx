import { SubscribeButtonProps } from '../../models/subscribeButtonProps';
import styles from './styles-subscribeButton.module.scss'

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    return(
        <button 
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    );
}