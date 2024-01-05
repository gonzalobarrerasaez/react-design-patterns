/* layout pattern */
// import { SplitScreen } from "./Components/LayoutComponents/SplitScreen";
// import { LeftHandComponent } from "./Components/LayoutComponents/LeftHandComponent";
// import { RightHandComponent } from "./Components/LayoutComponents/RightHandComponent";

/* factory pattern */
import Factory from "./Components/FactoryPatternsComponents/Factory";
import cards from "./data/FactoryParttternsMock";

function App() {
  return (
    <>
      {/* 
      <h1>layout component pattern</h1>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen> 
      */}

      <h1>Factory Pattern</h1>
      <div>
        {Object.values(cards).map((card, i) => (
          <Factory component={card.component} key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
