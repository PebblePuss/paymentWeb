import MyViewAside from "../contents/MyView";
import HistoryAccount from "../contents/History_Account";

import styles from "./css/MainPage.module.css"


const MainPage = () => {
    return (
        <section className={styles.MainContainer}
        >
            <HistoryAccount />
            <MyViewAside />
        </section>
    );
}

export default MainPage;