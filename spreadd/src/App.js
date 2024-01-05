import React from "react";
import { SpreaddAcademy } from "./components/SpreaddAcademy/SpreaddAcademy";
import { CreatorStore } from "./components/CreatorStore/CreatorStore";
// import { WhySpreadd } from "./components/WhySpreadd/WhySpreadd";
// import { Collaboration } from "./components/Collaboration/Collaboration";
function App() {
  return (
    <div className="App">
      <SpreaddAcademy />
      <CreatorStore />
      {/* <Collaboration /> */}
      {/* <WhySpreadd /> */}
    </div>
  );
}

export default App;
