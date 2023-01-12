import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import TopBar from "./component/TopBar/TopBar";
import Footer from "./component/Footer/Footer";
import { lazy, Suspense } from "react";
import Spinner from "./Shared/component/Spinner";
const HomeComponent = lazy(() => import("./component/Home/HomeComponent"));
const ReferEarn = lazy(() => import("./component/ReferEarn/ReferEarn"));

const Routes = () => {
  return (
    <>
      <Router basename="tute-dude">
        <div style={{ height: "4rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <TopBar />
        </div>
        <div style={{ height: "calc(100vh - 8rem)", overflow: "scroll" }}>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact={true} path="/" render={() => <Redirect to="/refer-earn" />} />
              <Route exact={true} path="/refer-earn" component={ReferEarn} />
              <Route exact={true} path="/friends-referred" component={HomeComponent} />
            </Switch>
          </Suspense>
        </div>
        <div style={{ height: "4rem" }}>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default Routes;
