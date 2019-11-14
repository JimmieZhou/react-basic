import React, { Suspense } from "react";
const Comp = React.lazy(() => import("./Comp"));

class Index extends React.Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Comp>this is dynamic import</Comp>
      </Suspense>
    );
  }
}
export default Index;
