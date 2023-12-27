import { SplitScreen } from "./Components/LayoutComponents/SplitScreen";
import { LeftHandComponent } from "./Components/LayoutComponents/LeftHandComponent";
import { RightHandComponent } from "./Components/LayoutComponents/RightHandComponent";

function App() {
  return (
    <>
      <h1>layout component pattern</h1>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen>
    </>
  );
}

export default App;
