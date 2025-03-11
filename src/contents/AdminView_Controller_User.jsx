import axios from 'axios';
import { useEffect, useState } from 'react';
import AdminViewUserInfo from "../components/AdminView_User_Info";
import styles from "./css/AdminView_Controller_User.module.css";

const AdminViewControllerUser = () => {
    const [users, setUsers] = useState([]); // 사용자 정보를 상태로 관리

    useEffect(() => {
        // 사용자 정보를 가져오는 API 호출
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');  // JWT 토큰을 클라이언트에서 가져오거나 저장된 곳에서 불러옵니다.
                const response = await axios.get('/api/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`  // Authorization 헤더에 JWT 토큰을 포함
                    }
                });

                if (response.status === 200) {
                    setUsers(response.data);  // 응답받은 사용자 정보로 상태 업데이트
                } else {
                    console.log('사용자 정보를 가져오는 데 실패했습니다.');
                }
            } catch (error) {
                console.error('API 호출 오류:', error);
                alert('사용자 정보를 불러오는 데 문제가 발생했습니다.');
            }
        };

        fetchUsers(); // 컴포넌트가 렌더링될 때 사용자 정보 불러오기
    }, []); // 빈 배열을 넣어 컴포넌트가 처음 렌더링될 때만 호출

    return (
        <section className={styles.AdminView_UserController_Container}>
            {users.map(user => (
                <AdminViewUserInfo
                    key={user.id}
                    name={user.username}
                    email={user.email}
                    accountId={user.id}
                    account={user.balance}  // 계좌 정보도 사용자와 함께 표시
                />
            ))}
        </section>
    );
};

export default AdminViewControllerUser;