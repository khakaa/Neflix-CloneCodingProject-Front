import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { Route, Switch } from "react-router-dom";

import Header from "../shared/Header";
import Browse from "../pages/Browse";
import Movies from "../pages/Movies";
import Footer from "../shared/Footer";

function App() {
  return (
    <React.Fragment>
      <Header></Header>

      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Browse}></Route>
          {/* <Route path="/movies" exact component={Movies}></Route> */}
        </Switch>
      </ConnectedRouter>

      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
