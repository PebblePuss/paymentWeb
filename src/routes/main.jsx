import {Route, Routes} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import UserPage from "../pages/UserPage";
import MainPage from "../pages/MainPage";
import StorePage from "../pages/StorePage";
import ProductPage from "../pages/ProductPage";
import PaymentPage from "../pages/PaymentPage";
import AdminPage from "../pages/AdminPage";

const pageRoute = [
    { path: "/", element: <LoginPage/>  },
    { path: "/signup", element: <SignupPage/>  },
    { path: "/user", element: <UserPage/>  },
    { path: "/kitpay", element: <MainPage/>  },
    { path: "/store", element: <StorePage/>  },
    { path: "/store:id", element: <ProductPage/>  },
    { path: "/payment", element: <PaymentPage/>  },
    { path: "/admin", element: <AdminPage/>  },
]

const Rout = () => (
    <Routes>
        {pageRoute.map((page, idx) =>
            <Route key={idx} path={page.path} element={page.element} />
        )}
    </Routes>
);

export default Rout;