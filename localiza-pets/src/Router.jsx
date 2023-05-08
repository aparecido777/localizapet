import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";

export default function Router() {
    return (
      <>
          <Route path="/" element={<Home />}>
            
          </Route>
          
      </>
    );
  }
  