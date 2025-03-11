import Inpt from "./Inpt";

const TransferGet = ({onchange}) => {
    return (
        <div>
            <p>이체 대상의 성명을 작성해주세요.</p>
            <Inpt key={1} title={""} onchange={onchange} error={""} />
        </div>
    )
}

export default TransferGet;