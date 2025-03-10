import styles from "./css/MyView_Admin_Info.module.css"

const MyViewAdminInfo = ({ name }) => {
    return (
        <div className={styles.MyView_Admin}
        >
            <p className={styles.MyView_Admin_Welcome}
            >
                안녕하세요
            </p>
            <p className={styles.MyView_Admin_Name}
            >
                {name} 관리자님
            </p>
        </div>
    );
};

export default MyViewAdminInfo;