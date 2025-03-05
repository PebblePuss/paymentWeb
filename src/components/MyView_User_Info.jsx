import styles from "./css/MyView_User_Info.module.css"

const MyViewUserInfo = ({ name, email, imagePath }) => {
    return (
        <div className={styles.MyView_User}
        >
            <div className={styles.dummyImage}
            ></div>
            <div className={styles.MyView_UserInfo}
            >
                <p className={styles.MyView_UserInfo_Name}
                >
                    {name}님
                </p>
                <p className={styles.MyView_UserInfo_Email}
                >
                    {email}
                </p>
            </div>
        </div>
    );
};

export default MyViewUserInfo;