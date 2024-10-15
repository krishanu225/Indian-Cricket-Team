import { BrowserRouter, Route, Routes } from "react-router-dom";

import Team from "../Team";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="team" element={<Team/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
