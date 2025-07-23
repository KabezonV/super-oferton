// Vendors
import React from "react";
// Components
import { OfferList } from "./flows/offers/components/offer-list/offerList";
import { SingleSelectDropdown } from "./components/dropdwon/dropdwon.component";
// Styles
import "./App.css";

const App = () => {
  return (
    <>
      <header></header>

      <OfferList />
      <footer></footer>
    </>
  );
};

export { App };
