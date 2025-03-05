import { userLogin } from "../hooks/userLogin";

import Inpt from "../components/Inpt";
import Btn from "../components/Btn";

import styles from "./css/Login_Content.module.css";

const LoginContent = () => {
    const [data, error, setData] = userLogin(null);

    return (
        <form className={styles.loginFormContainer}>
            <Inpt
                title={"아이디"}
                error={error.id}
                onchange={setData}
            />
            <Inpt
                title={"패스워드"}
                error={error.pw}
                onchange={setData}
            />
            <div className={styles.loginBtnContainer}>
                <Btn
                    type="submit"
                    mode={""}
                    text={"로그인"}
                    onClick={() => console.log("로그인 클릭") }
                />
                <Btn
                    type="button"
                    mode={""}
                    text={"회원 가입"}
                    onClick={() => console.log("회원가입 클릭") }
                />
            </div>
        </form>
    );
};

export default LoginContent;