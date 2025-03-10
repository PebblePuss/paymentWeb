import SignupContent from "../contents/SignupContent";

import styles from "./css/SignupPage.module.css";

const SignupPage = () => {

    return (
        <section className={styles.signupContainer}>
            <p className={styles.signupTitle}>KIT PAY</p>
            <SignupContent />
        </section>
    );
}

export default SignupPage;