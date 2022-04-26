import { Suspense } from "react";
import spinner from "../assets/images/Spin-1s-200px.gif";
export default (Component) => (
  <Suspense
    fallback={
      <div className="img">
        <img src={spinner} alt="Loading..."></img>
      </div>
    }
  >
    <Component />
  </Suspense>
);
