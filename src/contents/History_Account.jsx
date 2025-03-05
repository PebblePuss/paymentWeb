import ProductForHistory from "../components/History_Account_Info";

import styles from "./css/History_Account.module.css"

const HistoryAccount = () => {
    return (
        <section className={styles.PaymentHistory}
        >
            <p className={styles.PaymentHistory_Title}>결제 내역</p>
            <div className={styles.PaymentHistory_ItemContainer}
            >
                <ProductForHistory
                    productStatus={"상품 준비중"}
                    paymentData={{
                        date: "2025.02.28 13:00",
                        product : {
                            name : "갤럭시 북5 프로",
                            price : 50000
                        }
                    }}
                />
                <ProductForHistory
                    productStatus={"배송완료"}
                    paymentData={{
                        date: "2024.02.28 13:00",
                        product : {
                            name : "갤럭시 북4 프로",
                            price : 40000
                        }
                    }}
                />
                <ProductForHistory
                    productStatus={"구매확정"}
                    paymentData={{
                        date: "2024.02.28 13:00",
                        product : {
                            name : "갤럭시 북4 프로",
                            price : 40000
                        }
                    }}
                />
            </div>
        </section>
    );
}

export default HistoryAccount;