import {Route, Routes} from "react-router-dom";

import Nav from "../contents/Nav";

import UserPage from "../pages/UserPage";
import StorePage from "../pages/StorePage";
import ProductPage from "../pages/ProductPage";
import PaymentPage from "../pages/PaymentPage";
import AdminPage from "../pages/AdminPage";
import TransferPage from "../pages/TransferPage";
import MainPage from "../pages/MainPage";

const pageRoute = [
    { path: "/", element: <MainPage />  },
    { path: "store", element: <StorePage />  },
    { path: "product/:id", element: <ProductPage />  },
    { path: "payment", element: <PaymentPage />  },
    { path: "transfer", element: <TransferPage />  },
    { path: "user", element: <UserPage />  },
    { path: "admin", element: <AdminPage />  },
];

const Mout = () => (
    <>
        <Nav />
        <Routes>
            {pageRoute.map((page, idx) =>
                <Route key={idx} path={page.path} element={page.element} />
            )}
        </Routes>
    </>
);


export default Mout;