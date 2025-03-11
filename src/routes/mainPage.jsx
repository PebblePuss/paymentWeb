import {Route, Routes} from "react-router-dom";

import Nav from "../contents/Nav";

import UserPage from "../pages/UserPage";
import StorePage from "../pages/StorePage";
import AdminPage from "../pages/AdminPage";
import TransferPage from "../pages/TransferPage";
import MainPage from "../pages/MainPage";

const pageRoute = [
    { path: "/", element: <MainPage />  },
    { path: "store", element: <StorePage />  },
    { path: "transfer", element: <TransferPage />  },
    { path: "user", element: <UserPage />  },
    { path: "admin", element: <AdminPage />  },
];

const Mout = () => (
    <>
        <Nav />
        <section
            style={{marginTop: "3.5rem"}}
        >
            <Routes>
                {pageRoute.map((page, idx) =>
                    <Route key={idx} path={page.path} element={page.element} />
                )}
            </Routes>
        </section>
    </>
);


export default Mout;