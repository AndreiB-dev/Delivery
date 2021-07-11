import React from "react";
import { Footer } from "./components/";
import { Header, Products } from "./containers/";

import "./app.scss";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Products />
            <Footer />
        </div>
    );
}

export default App;
