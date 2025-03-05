import LoginContent from "../contents/Login_Content";

import styles from "./css/LoginPage.module.css"

const LoginPage = () => {

    return (
        <section className={styles.loginContainer}
        >
            <p className={styles.loginTitle}>KIT PAY</p>
            <LoginContent />
        </section>
    )
}

export default LoginPage;