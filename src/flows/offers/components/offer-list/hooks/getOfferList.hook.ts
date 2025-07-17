// Vendors
import React, { useEffect, useState } from "react";
// Services
import { getOffers } from "../services/getOffers.services";

const getOfferListHook = () => {
  const [offers, setOffers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getOffers({ setLoading, setError, setOffers });
  }, []);

  return {
    offers,
    loading,
    error,
  };
};

export { getOfferListHook };
