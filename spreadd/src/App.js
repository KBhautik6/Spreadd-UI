import React from "react";
import { SpreaddAcademy } from "./components/SpreaddAcademy/SpreaddAcademy";
import { CreatorStore } from "./components/CreatorStore/CreatorStore";
import { GlobalStyles } from "./components/CreatorStore/CreatorStore.styled";
import {Campaign} from "./components/Campaign/Campaign";
import {Collabaration} from "./components/Collabaration/Collabaration";
import {Partner} from "./components/Partner/Partner";
import {WhySpreadd} from "./components/WhySpreadd/WhySpreadd";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <SpreaddAcademy />
      <CreatorStore />
      <Campaign/>
      <Collabaration/>
      <Partner/>
      <WhySpreadd/>
    </div>
  );
}

export default App;
