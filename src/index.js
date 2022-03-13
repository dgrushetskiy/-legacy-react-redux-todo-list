import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { store } from "./store";

import App from "./componets/app/app";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
