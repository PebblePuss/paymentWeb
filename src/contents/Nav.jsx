import Btn from "../components/Btn";

import styles from "./css/Nav.module.css"

const Nav = () => {
    return (
        <nav id={styles.navigator}>
            <p id={styles.navTitle}>KIT PAY</p>
            <div id={styles.navBtnContainer}>
                <Btn
                    type={"button"}
                    mode={"nav"}
                    text={"스토어"}
                    onClick={() => console.log("스토어 페이지 이동") }
                    />
                <Btn
                    type={"button"}
                    mode={"nav"}
                    text={"관리자"}
                    onClick={() => console.log("관리자 페이지 이동") }
                    />
            </div>
        </nav>
    )
}

export default Nav;