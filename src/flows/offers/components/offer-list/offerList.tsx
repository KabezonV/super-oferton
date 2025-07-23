// Components
import { ErrorComponent } from "../../../../components/error/error.component";
import { LoadingComponent } from "../../../../components/loading/loading.component";
// Hooks
import { getOfferListHook } from "./hooks/getOfferList.hook";
// Styles
import "./styles/offerList.css";

const OfferList = () => {
  const { offers, loading, error } = getOfferListHook();
  if (loading) {
    return <LoadingComponent />;
  }
  if (error) {
    return <ErrorComponent />;
  }
  // componente no resultados
  return (
    <div>
      <h1>Chollos</h1>
      <div className="list-container">
        <div>
          {offers?.map((offer) => (
            <div key={offer.id}>
              <img src={offer.avatarUrl} alt={offer.merchantName} />
              <h2>{offer.title}</h2>
              <p>{offer.descri00ption}</p>
              <p>{offer.categories}</p>
              <p onClick={() => offer.city}>{offer.city}</p>
              <p>{offer.contact.phone}</p>
              <p>{offer.contact.mail}</p>
              <p>{offer.contact.website}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export { OfferList };
