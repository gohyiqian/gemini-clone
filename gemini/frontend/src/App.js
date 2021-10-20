import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NaviBar from "./components/Navibar";
import ProductPage from "./pages/ProductPage";
import PricePage from "./pages/PricePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AcademyPage from "./pages/AcademyPage";
import WalletPage from "./pages/WalletPage";
import ThemeContext from "./ThemeContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PriceShowPage from "./pages/PriceShowPage";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isAuth, setIsAuth] = useState(false);
  const [status, setStatus] = useState("Log In");
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  // This useEffect hook automatically hides the
  // success and error messages after 2s when they're shown.
  useEffect(() => {
    if (showSuccessMsg || showErrorMsg) {
      setTimeout(() => {
        setShowSuccessMsg(false);
        setShowErrorMsg(false);
      }, 3000);
    }
  }, [showSuccessMsg, showErrorMsg]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <div className="App">
          <NaviBar
            status={status}
            setStatus={setStatus}
            setIsAuth={setIsAuth}
          />
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
              <Route path="/price/:symbol" component={PriceShowPage} />
              <Route path="/academy">
                <AcademyPage />
              </Route>
              <Route path="/login">
                <LoginPage
                  setStatus={setStatus}
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                  showErrorMsg={showErrorMsg}
                  setShowErrorMsg={setShowErrorMsg}
                />
              </Route>
              <Route path="/signup">
                <SignUpPage
                  showSuccessMsg={showSuccessMsg}
                  setShowSuccessMsg={setShowSuccessMsg}
                />
              </Route>
              {/* Passing props to ProtectedRoute */}
              <ProtectedRoute
                path="/wallet"
                component={WalletPage}
                isAuth={isAuth}
                status={status}
                setStatus={setStatus}
              />
            </Switch>
          </main>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
