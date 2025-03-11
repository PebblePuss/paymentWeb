import { useState, useEffect } from "react";
import axios from "axios"; // axios를 사용하여 API 호출

import MyViewUserInfo from "../components/MyView_User_Info";
import MyViewAccountInfo from "../components/MyView_Account_Info";
import styles from "./css/MyView.module.css";

const MyViewAside = () => {
    // 상태 관리
    const [userInfo, setUserInfo] = useState(null);
    const [accountInfo, setAccountInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 사용자 정보 API 호출
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('/api/user', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // JWT 토큰 사용
                    },
                });
                setUserInfo(response.data); // 사용자 정보 저장
            } catch (err) {
                setError("사용자 정보를 불러오는데 실패했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    // 계좌 정보 API 호출
    useEffect(() => {
        if (userInfo) {
            const fetchAccountInfo = async () => {
                try {
                    const response = await axios.get(`/api/account`, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`, // JWT 토큰 사용
                        },
                    });
                    setAccountInfo(response.data); // 계좌 정보 저장
                } catch (err) {
                    setError("계좌 정보를 불러오는데 실패했습니다.");
                }
            };

            fetchAccountInfo();
        }
    }, [userInfo]); // userInfo가 변경될 때마다 실행

    // 로딩 중일 때 처리
    if (loading) {
        return <div>로딩 중...</div>;
    }

    // 에러 처리
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <aside className={styles.MyView_Aside}>
            {userInfo && accountInfo && (
                <>
                    <MyViewUserInfo
                        imagePath={userInfo.image || '/default-image.jpg'} // 이미지 경로 설정
                        name={userInfo[0].username}
                        email={userInfo[0].email}
                    />
                    <MyViewAccountInfo
                        accountInfo={"OOO 계좌 120391042148124"} // 계좌 정보
                        balance={accountInfo.balance} // 잔액
                    />
                </>
            )}
        </aside>
    );
};

export default MyViewAside;
