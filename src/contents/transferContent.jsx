import { useState } from "react";
import axios from "axios";
import TransferSend from "../components/Transfer_Send";
import TransferGet from "../components/Transfer_Get";
import Btn from "../components/Btn";

import styles from "./css/TransferContent.module.css";
import {useNavigate} from "react-router-dom";

const TransferContent = () => {
    const [senderId, setSenderId] = useState("");  // 송금자 ID
    const [receiverId, setReceiverId] = useState("");  // 수금자 ID
    const [amount, setAmount] = useState("");  // 송금 금액

    const history = useNavigate();

    // 송금 처리 함수
    const handleTransfer = async () => {
        try {
            const token = localStorage.getItem('token');  // localStorage에서 JWT 토큰을 가져옵니다.

            if (!token) {
                alert("로그인 후 송금을 진행해주세요.");
                return;
            }

            // 송금자 ID는 로그인한 본인이므로 JWT 토큰에서 추출
            const userInfo = JSON.parse(atob(token.split('.')[1])); // JWT 토큰에서 페이로드 추출
            const senderIdFromToken = userInfo.userId;  // JWT 토큰에서 송금자의 userId를 추출

            // 송금 요청 보내기
            const response = await axios.post(
                '/api/transfer',
                {
                    senderId: senderIdFromToken,  // 송금자는 로그인한 본인
                    receiverId,
                    amount: parseFloat(amount),
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`  // JWT 토큰을 헤더에 포함
                    }
                }
            );

            if (response.status === 200) {
                alert("송금 완료!");
                history("/kitpay/admin");
            } else {
                alert("송금 실패: " + response.data.error);
            }
        } catch (error) {
            console.error("송금 오류:", error);
            alert("송금 오류가 발생했습니다.");
        }
    };

    return (
        <section className={styles.transferContent_container}>
            <TransferSend onchange={setAmount} />
            <TransferGet onchange={setReceiverId} />

            <Btn type={"button"} mode={""} text={"송금"} onClick={handleTransfer} />
        </section>
    );
};

export default TransferContent;
