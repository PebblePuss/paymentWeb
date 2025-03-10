import Btn from "../components/Btn";

const DeductedBtn = () => {
    return (
        <div>
            <Btn type={"button"} mode={""} text={"10000원 입금"} onClick={() => console.log("입금!")}/>
            <Btn type={"button"} mode={""} text={"10000원 차감"} onClick={() => console.log("차감!")}/>
            <Btn type={"button"} mode={""} text={"5000원 입금"} onClick={() => console.log("입금!")}/>
            <Btn type={"button"} mode={""} text={"5000원 차감"} onClick={() => console.log("차감!")}/>
        </div>
    )
};

export default DeductedBtn;