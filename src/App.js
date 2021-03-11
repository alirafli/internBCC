import React, { useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
// import PrivateRoute from "./config/PrivateRoute";
import { AuthContext } from "./config/Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FullPlaceCollection from "./pages/fullPlaceCollection/FullPlaceCollection";
import FullVariousCulinary from "./pages/fullVariousCulinary/FullVariousCulinary";
import AnekaKuliner from "./pages/anekaKuliner/AnekaKuliner"
import Restoran from "./pages/restoran/Restoran"
import UserProfile from "./pages/userProfile/UserProfile"

function App() {
  const existingToken = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingToken);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <div>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
          <GlobalStyle />
          <Navbar isLoggedIn={!authTokens ? false:true}/>
          <Switch>
            <Route path="/PlaceCategory" component={FullPlaceCollection} />
            <Route path="/VariousCulinary/:id" component={FullVariousCulinary} />
            <Route path="/Resto/all" component={AnekaKuliner} />
            <Route path="/Resto/restaurant/:id" component={Restoran} />
            <Route path="/user-profile" component={UserProfile} /> 
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
