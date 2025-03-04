import UserDiv from "../components/UserDiv";

const MainPage = () => {
    return (
        <section>
            <UserDiv
                imagePath={"./public/images/profile.png"}
                id={"오승택"}
                email={"dummy@example.com"}
            />
        </section>
    );
}

export default MainPage;