import Image from 'next/image'
import styles from './styles-header.module.scss' 

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
            </div>
           
        </header>
    );
}