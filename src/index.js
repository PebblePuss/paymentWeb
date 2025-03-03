import React from 'react';
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import store from "./core/storeConfig"
import App from './App';

import './index.css';

const Index = () => (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(<Index />);