import Btn from "../components/Btn";

const AdminAccountController = () => {
    return (
        <div>
            <Btn
                type={"button"}
                mode={""}
                text={"금액 10000원"}
                onClick={() => console.log("금액 추가")}/>
            <Btn
                type={"button"}
                mode={""}
                text={"금액 5000원"}
                onClick={() => console.log("금액 추가")}/>
            <Btn
                type={"button"}
                mode={""}
                text={"금액 차감 10000원"}
                onClick={() => console.log("금액 차감")} />
            <Btn
                type={"button"}
                mode={""}
                text={"금액 차감 5000원"}
                onClick={() => console.log("금액 차감")} />
        </div>
    )
}