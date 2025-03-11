import { useState, useEffect } from 'react';
import MyView_Admin_Info from "../components/MyView_Admin_Info";
import AdminControllerAccount from "./Admin_Controller_Account";
import styles from "./css/AdminView.module.css";

const AdminView = () => {
    const [username, setUsername] = useState(null);

    // 로그인한 사용자 정보를 API에서 가져오는 함수
    const fetchUserInfo = async () => {
        try {
            const response = await fetch('/api/user', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // 예시로 로컬스토리지에서 토큰을 가져옴
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUsername(data[0].username); // 응답에서 username을 가져와서 상태에 저장
            } else {
                console.log('사용자 정보를 가져오는 데 실패했습니다.');
            }
        } catch (error) {
            console.error('API 호출 중 오류 발생:', error);
        }
    };

    // 컴포넌트가 마운트될 때 사용자 정보 가져오기
    useEffect(() => {
        fetchUserInfo();
    }, []);

    return (
        <aside className={styles.adminController}>
            <MyView_Admin_Info name={username || "Loading..."} />  {/* username이 없으면 로딩 중 표시 */}
            <AdminControllerAccount />
        </aside>
    );
};

export default AdminView;