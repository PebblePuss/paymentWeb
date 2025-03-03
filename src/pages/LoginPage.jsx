import Inpt from "../components/Inpt";

const LoginPage = () => {
    return (
        <Inpt
            key={1}
            title={'아이디'}
            error={"에러에러!"}
            onchange={(e) => console.log(e)}
        />
    )
}

export default LoginPage;