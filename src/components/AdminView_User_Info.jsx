import Btn from "./Btn";

const AdminViewUserInfo = ({ name, email, accountId, account }) => {
    return (
        <div>
            <div>
                <p>{name}</p>
                <p>{email}</p>
                <p>{accountId}</p>
                <p>{account}</p>
            </div>
            <div>
                <Btn type={"button"} mode={""} text={"회원 수정"} onClick={() => console.log("회원 수정")} />
                <Btn type={"button"} mode={""} text={"회원 탈퇴"} onClick={() => console.log("회원 탈퇴")} />
            </div>
        </div>
    )
}

export default AdminViewUserInfo