import { DailyPrice } from "../types/types";

const DailyPricesTable = ({ open, low, close, high }: DailyPrice) => {
  return (
    <table className="table-auto w-full text-xs align-bottom">
      <tbody>
        <tr className="text-gray-500">
          <th className="border-r border-gray-300 font-medium py-4">Open</th>
          <th className="border-r border-gray-300 font-medium py-4">High</th>
          <th className="border-r border-gray-300 font-medium py-4">Low</th>
          <th className="font-medium py-4">Close</th>
        </tr>
        <tr className="text-center">
          <td className="border-r border-t border-b border-gray-300 py-4">
            {open}
          </td>
          <td className="border border-gray-300 text-gray-600 py-4">{high}</td>
          <td className="border border-gray-300 py-4">{low}</td>
          <td className="border-l border-t border-b border-gray-300 py-4">
            {close}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DailyPricesTable;
