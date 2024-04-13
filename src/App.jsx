import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import {TrilhasContextProvider} from "./context/TrilhasContext"

function App() {
  return (
    <TrilhasContextProvider>
      <Header />
      <Outlet />
    </TrilhasContextProvider>
  );
}

export default App;
