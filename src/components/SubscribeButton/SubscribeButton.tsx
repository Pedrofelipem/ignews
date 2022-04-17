import styles from './styles-subscribeButton.module.scss'

export function SubscribeButton() {
    return(
        <button 
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    );
}