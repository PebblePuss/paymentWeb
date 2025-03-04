import { userLogin } from "../hooks/userLogin";

import styles from "./css/LoginPage.module.css"
import LoginContent from "../contents/LoginContent";

const LoginPage = () => {

    return (
        <section id={styles.loginContainer}>
            <p id={styles.loginTitle}>KIT PAY</p>
            <LoginContent />
        </section>
    )
}

export default LoginPage;