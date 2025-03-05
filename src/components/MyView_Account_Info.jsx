import styles from "./css/MyView_Account_Info.module.css"
import Btn from "./Btn";

const MyViewAccountInfo = ({ accountInfo, balance  }) => {
    return (
        <div className={styles.MyView_Account}
        >
            <p>{accountInfo}</p>
            <div className={styles.MyView_AccountC}>
                <div className={styles.MyView_Account_Details}
                >
                    <p>금액</p>
                    <p className={styles.MyView_Account_Balance}
                    >{balance} 원</p>
                </div>
                <div className={styles.MyView_Account_DetailsBtn}
                >
                    <Btn
                        type={"button"}
                        mode={""}
                        text={"충전"}
                        onClick={() => console.log("충전")}
                        />
                    <Btn
                        type={"button"}
                        mode={""}
                        text={"송금"}
                        onClick={() => console.log("송금")}
                    />
                </div>
            </div>
        </div>
    )
}

export default MyViewAccountInfo;