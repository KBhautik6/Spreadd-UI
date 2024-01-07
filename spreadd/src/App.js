import React from "react";
import { SpreaddAcademy } from "./components/SpreaddAcademy/SpreaddAcademy";
import { CreatorStore } from "./components/CreatorStore/CreatorStore";
import { GlobalStyles } from "./components/CreatorStore/CreatorStore.styled";
import { WhySpreadd } from "./components/WhySpreadd/WhySpreadd";
import { Campaign } from "./components/Campaign/Campaign";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <SpreaddAcademy />
      <CreatorStore />
      <WhySpreadd />
      <Campaign/>
    </div>
  );
}

export default App;
