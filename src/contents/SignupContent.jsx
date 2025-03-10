import { userSignup } from "../hooks/userSignup";

import Inpt from "../components/Inpt";
import Btn from "../components/Btn";

import styles from "./css/SignupContent.module.css";

const SignupContent = () => {
    const [data, error, setData] = userSignup(null);

    return (
        <form className={styles.signupFormContainer}>
            <Inpt
                key={1}
                title={"아이디"}
                error={error.id}
                onchange={setData}
            />
            <Inpt
                key={2}
                title={"패스워드"}
                error={error.pw}
                onchange={setData}
            />
            <Inpt
                key={3}
                title={"이메일"}
                error={error.email}
                onchange={setData}
            />
            <div className={styles.signupBtnContainer}>
                <Btn
                    type="submit"
                    mode={""}
                    text={"회원가입"}
                    onClick={() => console.log("회원가입 클릭") }
                />
            </div>
        </form>
    );
};

export default SignupContent;