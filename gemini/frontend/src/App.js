import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NaviBar from "./components/Navibar";
import ProductPage from "./pages/ProductPage";
import PricePage from "./pages/PricePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AcademyPage from "./pages/AcademyPage";
import WalletPage from "./pages/WalletPage";
import ThemeContext from "./ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <NaviBar />
        <main>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/products">
              <ProductPage />
            </Route>
            <Route path="/prices">
              <PricePage />
            </Route>
            <Route path="/academy">
              <AcademyPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            {/* wallet Route only for after user login */}
            <Route path="/wallet">
              <WalletPage />
            </Route>
          </Switch>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
