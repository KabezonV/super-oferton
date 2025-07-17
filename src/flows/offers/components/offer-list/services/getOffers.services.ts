// Constants
import { apiAuthHeader } from "./constants/getOffers.services.constants";
// Utils
import { api } from "../../../../../api/api";

const getOffers = async ({ setLoading, setError, setOffers }) => {
  setLoading(true);
  setError(null);
  try {
    const response = await api.get("v3/b/6870e0236063391d31ab6447", {
      headers: apiAuthHeader,
    });
    setOffers(response.data.record);
  } catch (error) {
    setOffers(null);
    setError(error);
  } finally {
    setLoading(false);
  }
};
export { getOffers };
