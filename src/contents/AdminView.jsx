import MyView_Admin_Info from "../components/MyView_Admin_Info";
import DeductedBtn from "./Deducted_Btn";

const AdminView = () => {
    return (
        <aside>
            <MyView_Admin_Info name={"오승택"} />
            <DeductedBtn />
        </aside>
    )
};

export default AdminView;