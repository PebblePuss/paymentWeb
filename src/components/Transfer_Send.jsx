import Inpt from "./Inpt";

const TransferSend = ({onchange}) => {
    return (
        <div>
            <p>이체 금액을 입력해주세요.</p>
            <Inpt key={1} title={""} onchange={onchange} error={""} />
        </div>
    )
}

export default TransferSend;