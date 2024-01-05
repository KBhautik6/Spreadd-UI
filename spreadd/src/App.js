import React from "react";
import { SpreaddAcademy } from "./components/SpreaddAcademy/SpreaddAcademy";
import { CreatorStore } from "./components/CreatorStore/CreatorStore";
import { GlobalStyles } from "./components/CreatorStore/CreatorStore.styled";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <SpreaddAcademy />
      <CreatorStore />
    </div>
  );
}

export default App;
