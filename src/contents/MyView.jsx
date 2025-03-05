import MyViewUserInfo from "../components/MyView_User_Info";
import MyViewAccountInfo from "../components/MyView_Account_Info";

import styles from "./css/MyView.module.css";
import image from "../images/profile.png";

const MyViewAside = () => {
    return (
        <aside className={styles.MyView_Aside}
        >
            <MyViewUserInfo
                imagePath={image}
                name={"오승택"}
                email={"dummy@example.com"}
            />
            <MyViewAccountInfo
                accountInfo={"농협 은행 12345678901023"}
                balance={10000}
            />
        </aside>
    )
}

export default MyViewAside;