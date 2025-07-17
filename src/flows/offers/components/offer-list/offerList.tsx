// Hooks
import { getOfferListHook } from "./hooks/getOfferList.hook";

const OfferList = () => {
  const { offers, loading, error } = getOfferListHook();
  if (loading) {
    return <p>Cargando</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <div>
      <h1>Chollos</h1>
      <div>
        {offers?.map((offer) => (
          <div key={offer.id}>
            <img src={offer.avatarUrl} alt={offer.merchantName} />
            <h2>{offer.title}</h2>
            <p>{offer.description}</p>
            <p>{offer.categories}</p>
            <p onClick={() => offer.city}>{offer.city}</p>
            <p>{offer.contact.phone}</p>
            <p>{offer.contact.mail}</p>
            <p>{offer.contact.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export { OfferList };
