import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const A = React.lazy(() => import("./A"));
const B = React.lazy(() => import("./B"));
class Index extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>loading......</div>}>
          <Switch>
            <Route exact path="/" component={A} />
            <Route path="/B" component={B} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
export default Index;
