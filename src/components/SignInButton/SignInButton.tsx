import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles-signInButton.module.scss'
import {signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton() {

    const {data : session} = useSession<boolean>()

    return session ? (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <FaGithub color="#04d361"/>
            
            <FiX color="#737380" className={styles.closeIcons}/>
        </button>
    ) : (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    )
}

