import Navbar from "../components/Navbar";
import DailyPricesTable from "../components/DailyPricesTable";
import { useEffect, useState } from "react";
import { DailyPrice } from "../types/types";
import { Currency } from "../enums/enums";
import { HiOutlineRefresh } from "react-icons/hi";
import { convertNestedJsonToArray, formatDate } from "../utils/utils";
import { useAuth } from "../context/LoginProvider";
import { fetchForexDailyPrices } from "../services/api";

const HomePage = () => {
  const [lastDailyPrice, setLastDailyPrice] = useState<DailyPrice>();
  const [fromCurrency, setFromCurrency] = useState<string>(Currency.EUR);
  const [toCurrency, setToCurrency] = useState<string>(Currency.USD);
  const [lastRefresh, setLastRefresh] = useState<string>();
  const { setIsLoggedIn } = useAuth();

  const fetchForexData = async (fromCurrency: string, toCurrency: string) => {
    setLastRefresh(formatDate(new Date()));

    const fromCurrencyEnum =
      Currency[fromCurrency as keyof typeof Currency] ?? Currency.EUR;
    const toCurrencyEnum =
      Currency[toCurrency as keyof typeof Currency] ?? Currency.USD;

    const data = await fetchForexDailyPrices(fromCurrencyEnum, toCurrencyEnum);
    const forexData = convertNestedJsonToArray(data);
    const mostRecentItem = forexData[0];
    setLastDailyPrice(mostRecentItem);
  };

  useEffect(() => {
    fetchForexData(fromCurrency, toCurrency);
  }, [fromCurrency, toCurrency]);

  return (
    <div className="h-screen w-screen">
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <div className="bg-gray-100 h-full flex justify-center">
        <div className="bg-white h-fit w-3xl md:w-5xl 2xl:w-[2000px] flex flex-col justify-center mx-5 p-5 mt-10">
          <div className="flex flex-row items-center space-x-4 mb-4">
            <div>
              <h3 className="text-md">Forex Daily Prices</h3>
              <p className="text-xs">Last Refresh: {lastRefresh}</p>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <select
                className="border p-2 border-gray-300 text-gray-400"
                value={fromCurrency}
                onChange={(event) => setFromCurrency(event.target.value)}
              >
                {Object.values(Currency).map((currency, idx) => (
                  <option key={idx} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <select
                className="border p-2 border-gray-300 text-gray-400"
                value={toCurrency}
                onChange={(event) => setToCurrency(event.target.value)}
              >
                {Object.values(Currency).map((currency, idx) => (
                  <option key={idx} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <button onClick={() => fetchForexData(fromCurrency, toCurrency)}>
                <HiOutlineRefresh />
              </button>
            </div>
          </div>
          <DailyPricesTable {...(lastDailyPrice || {})} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
