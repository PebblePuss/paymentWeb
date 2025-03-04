import {Route, Routes} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Mout from "./mainPage";

const pageRoute = [
    { path: "/", element: <LoginPage/>  },
    { path: "/signup", element: <SignupPage/>  },
    { path: "/kitpay/*", element: <Mout />  },
]

const Rout = () => (
    <Routes>
        {pageRoute.map((page, idx) =>
            <Route key={idx} path={page.path} element={page.element} />
        )}
    </Routes>
);

export default Rout;