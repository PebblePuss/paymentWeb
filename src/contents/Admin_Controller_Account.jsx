import Btn from "../components/Btn";

import styles from "./css/Admin_Account_Controller.module.css"
import {useNavigate} from "react-router-dom";

const AdminControllerAccount = () => {
    const history = useNavigate();

    return (
        <div
            className={styles.accountController}>
            <Btn
                type={"button"}
                mode={""}
                text={"금액 10000원"}
                onClick={() => history("/kitpay/transfer")}/>
            <Btn
                type={"button"}
                mode={""}
                text={"금액 5000원"}
                onClick={() => history("/kitpay/transfer")}/>
            <Btn
                type={"button"}
                mode={""}
                text={"금액 차감 10000원"}
                onClick={() => history("/kitpay/transfer")} />
            <Btn
                type={"button"}
                mode={""}
                text={"금액 차감 5000원"}
                onClick={() => history("/kitpay/transfer")} />
        </div>
    )
}

export default AdminControllerAccount;