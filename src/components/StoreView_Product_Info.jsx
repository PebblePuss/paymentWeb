import Btn from "./Btn";

import styles from "./css/StoreView_Product_Info.module.css"

const StoreViewProductInfo = ({ name, price }) => {
    return (
        <div
            className={styles.StoreView_ProductInfo_Container}>
            <div
                className={styles.StoreView_ProductInfo}>
                <div
                    className={styles.dummyImage}></div>
                <div
                    className={styles.StoreView_ProductInfo_text}>
                    <p className={styles.StoreView_ProductInfo_name}>{name}</p>
                    <p className={styles.StoreView_ProductInfo_price}>{price} 원</p>
                </div>
            </div>
            <Btn type={"button"} mode={""} text={"구매하기"} onClick={() => console.log("구매 요청")} />
        </div>
    )
}

export default StoreViewProductInfo;