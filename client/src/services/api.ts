import axios from "axios";
import { Currency } from "../enums/enums";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchForexDailyPrices = async (
  fromCurrency: Currency = Currency.EUR,
  toCurrency: Currency = Currency.USD
) => {
  try {
    const response = await axios.get(`${API_URL}/api/forex`, {
      params: {
        from_symbol: fromCurrency,
        to_symbol: toCurrency,
      },
    });
    if (response.data && response.data["Time Series FX (Daily)"])
      return response.data["Time Series FX (Daily)"];

    if (response.data["Error Message"]) {
      const data = await axios.get("./forexDailyPrices.json");
      if (data && data?.data["Time Series FX (Daily)"])
        return data?.data["Time Series FX (Daily)"];
    }
  } catch (error) {
    const data = await axios.get("./forexDailyPrices.json");
    if (data && data?.data["Time Series FX (Daily)"])
      return data?.data["Time Series FX (Daily)"];
  }
};
