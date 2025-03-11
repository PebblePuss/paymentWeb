import Btn from "./Btn";

import styles from "./css/AdminView_User_Info.module.css"

const AdminViewUserInfo = ({ name, email, accountId, account }) => {
    return (
        <div
            className={styles.adminView_userInfo_container}>
            <div
                className={styles.adminView_userInfo}>
                <p className={styles.adminView_userInfo_name}>{name}</p>
                <p className={styles.adminView_userInfo_email}>{email}</p>
                <p className={styles.adminView_userInfo_accountId}>Account ID : {accountId}</p>
                <p className={styles.adminView_userInfo_account}>금액 : {account} 원</p>
            </div>
            <div
                className={styles.adminView_userController}>
                <Btn type={"button"} mode={""} text={"회원 수정"} onClick={() => console.log("회원 수정")} />
                <Btn type={"button"} mode={""} text={"회원 탈퇴"} onClick={() => console.log("회원 탈퇴")} />
            </div>
        </div>
    )
}

export default AdminViewUserInfo