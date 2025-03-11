import AdminView from "../contents/AdminView";
import AdminViewControllerUser from "../contents/AdminView_Controller_User";

import styles from "./css/AdminPage.module.css";

const AdminPage = () => {
    return (
        <section
            className={styles.AdminPageContainer}>
            <AdminViewControllerUser />
            <AdminView />
        </section>
    )
}

export default AdminPage;