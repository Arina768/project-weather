import React from "react";
import { Main } from "./components";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => (
    <Provider store={store}>
        <Main />
    </Provider>
);
