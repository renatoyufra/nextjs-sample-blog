import Link from 'next/link'
import Alert from '../components/alert'
import styles from '../components/layout.module.css'

const Custom404 = () => {
    return (
        <>
            <h1>404 - Page Not Found</h1>
            <Alert type="error">
                Esta página no existe
            </Alert>
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>
                        Back to home
                    </a>
                </Link>
            </div>
        </>
    )

}

export default Custom404