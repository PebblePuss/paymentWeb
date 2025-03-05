import Btn from "./Btn";

import styles from "./css/History_Account_Info.module.css"

const buttonConfig = {
    "상품 준비중": [
        { text: "취소 요청", action: () => console.log("취소 요청!") },
        { text: "영수증 조회", action: () => console.log("영수증 조회") }
    ],
    "배송완료": [
        { text: "구매 확정", action: () => console.log("구매 확정 완료!") },
        { text: "반품 요청", action: () => console.log("반품 요청!") },
        { text: "교환 요청", action: () => console.log("교환 요청!") }
    ],
    "구매확정": [
        { text: "반품 요청", action: () => console.log("반품 요청!") },
        { text: "교환 요청", action: () => console.log("교환 요청!") }
    ]
};

const HistoryAccountInfo = ({ productStatus, paymentData }) => {
    return (
        <div className={styles.MyView_ProductHistory}>
            <p className={styles.MyView_ProductHistory_ProductStatus}
            >{productStatus}</p>
            <div className={styles.MyView_ProductHistory_Info}
            >
                <div className={styles.dummyImage}></div>
                <div className={styles.MyView_ProductHistory_Info_Details}
                >
                    <p className={styles.MyView_ProductHistory_Info_Details_Date}>{paymentData.date}</p>
                    <p className={styles.MyView_ProductHistory_Info_Details_Name}>{paymentData.product.name}</p>
                    <p className={styles.MyView_ProductHistory_Info_Details_Price}>{paymentData.product.price}원</p>
                </div>
            </div>
            <div className={styles.MyView_ProductHistory_Btn}
            >
                {buttonConfig[productStatus]?.map((btn) => (
                    <Btn type="button" mode={""} text={btn.text} onClick={btn.action} />
                ))}
            </div>
        </div>
    )
}

export default HistoryAccountInfo;