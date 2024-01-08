import React from "react";
import { SpreaddAcademy } from "./components/SpreaddAcademy/SpreaddAcademy";
import { CreatorStore } from "./components/CreatorStore/CreatorStore";
import { GlobalStyles } from "./components/CreatorStore/CreatorStore.styled";
import { WhySpreadd } from "./components/WhySpreadd/WhySpreadd";
import { Campaign } from "./components/Campaign/Campaign";
import { Partner } from "./components/Partner/Partner";
import { Collabaration } from "./components/Collabaration/Collabaration";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <SpreaddAcademy />
      <CreatorStore />
      <WhySpreadd />
      <Campaign />
      <Partner />
      <Collabaration />
    </div>
  );
}

export default App;
