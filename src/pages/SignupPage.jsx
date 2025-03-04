import styles from "./css/LoginPage.module.css";
import SignupContent from "../contents/SignupContent";

const SignupPage = () => {

    return (
        <section id={styles.loginContainer}>
            <p id={styles.loginTitle}>KIT PAY</p>
            <SignupContent />
        </section>
    );
}

export default SignupPage;