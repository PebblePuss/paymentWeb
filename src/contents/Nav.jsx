import Btn from "../components/Btn";

import styles from "./css/Nav.module.css"
import {useNavigate} from "react-router-dom";

const Nav = () => {
    const history = useNavigate();

    return (
        <nav id={styles.navigator}>
            <p id={styles.navTitle}>KIT PAY</p>
            <div id={styles.navBtnContainer}>
                <Btn
                    type={"button"}
                    mode={"nav"}
                    text={"스토어"}
                    onClick={() => history("/kitpay/store")}
                    />
                <Btn
                    type={"button"}
                    mode={"nav"}
                    text={"관리자"}
                    onClick={() => history("/kitpay/admin") }
                    />
            </div>
        </nav>
    )
}

export default Nav;