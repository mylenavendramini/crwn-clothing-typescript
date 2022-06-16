import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { UserProvider } from "./components/context/user.context";
// import { CategoriesProvider } from "./components/context/categories.context";
// import { CartProvider } from "./components/context/cart.context";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import { store, persistor } from "./store/store";
import "./index.scss";
import App from "./App";
import { stripePromise } from "./utils/stripe/stripe.utils";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/*<UserProvider>*/}
          {/*<CategoriesProvider>*/}
          {/*<CartProvider>*/}
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
          {/*</CartProvider>*/}
          {/*</CategoriesProvider>*/}
          {/* </UserProvider>*/}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
