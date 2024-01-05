import { Top, Middle, Footer, Left } from "./Cards";

export const Factory = (cards) => {
  switch (cards.component) {
    case "Top":
      return <Top />;
    case "Middle":
      return <Middle />;
    case "Footer":
      return <Footer />;
    case "Left":
      return <Left />;
    default:
      return <div>Reload...</div>;
  }
};
export default Factory;
