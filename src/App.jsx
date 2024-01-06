import React, { useEffect } from "react";
/* Layout pattern */
/* import { SplitScreen } from "./Components/LayoutComponents/SplitScreen";
 import { LeftHandComponent } from "./Components/LayoutComponents/LeftHandComponent";
 import { RightHandComponent } from "./Components/LayoutComponents/RightHandComponent";
 */

/* Factory pattern */
/* import Factory from "./Components/FactoryPatternsComponents/Factory";
 import cards from "./data/FactoryParttternsMock"; 
 */

/* Singleton Pattern */
import Singleton from "./Components/SingletonPattern/Singleton";

function App() {
  /* Singleton Pattern */
  useEffect(() => {
    let foo = Singleton();
    foo.print(); // Prints 0
    foo.createInstance();
    foo.print(); // Prints 1
    foo.createInstance();
    foo.print(); // Still prints 1
    foo.createInstance();
    foo.print(); // Still 1
    foo.closeInstance();
    foo.print(); // Prints 0;
  }, []);
  /* End Singleton Pattern */
  return (
    <>
      {/* 
      <h1>layout component pattern</h1>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen> 
      */}

      {/* <h1>Factory Pattern</h1>
      <div>
        {Object.values(cards).map((card, i) => (
          <Factory component={card.component} key={i} />
        ))}
      </div> */}

      {/* <h1>Singleton Pattern</h1> 
          Just uncomment useefect */}
    </>
  );
}

export default App;
