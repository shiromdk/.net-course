import "./App.css";
import { Container } from "semantic-ui-react";

import Navbar from "./Navbar";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import Homepage from "../features/home/Homepage";

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <Homepage />
      ) : (
        <>
          <Navbar />
          <Container style={{ marginTop: "7em" }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}
const observerApp = observer(App);
export default observerApp;
