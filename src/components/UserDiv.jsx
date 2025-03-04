import styles from "./css/UserDiv.module.css"

const UserDiv = ({ id, email, imagePath }) => {
    return (
        <div id={styles.MyView_UserInfo}>
            <image href={imagePath} />
            <div>
                <p>{id}님</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default UserDiv;

