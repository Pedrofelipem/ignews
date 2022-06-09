import Image from 'next/image'
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink/activeLink';
import { SignInButton } from '../SignInButton/SignInButton';
import styles from './styles-header.module.scss' 

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a >Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active}href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}