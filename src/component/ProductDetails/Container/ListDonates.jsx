import { RiBnbLine } from "react-icons/ri";

import Identicon from "react-identicons"
import Moment from "react-moment"
import { truncate } from "../../../store"

const ListDonates = ({ paymentDetail }) => {
  const sortedPayments = [...paymentDetail].sort(
    (a, b) =>
      new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
  )
  return (
    <div className="flex flex-col justify-center pt-4 mx-auto">
      <div
        className="max-h-[calc(100vh_-_25rem)] overflow-y-auto
        shadow-md rounded-md w-full mb-10"
      >
        <table className="min-w-full">
          <thead className="border-b bg-[#F0F4FB]">
            <tr>
              <th
                scope="col"
                className="text-md font-medium
                px-6 py-4 text-left"
              >
                Nhà hảo tâm
              </th>
              <th
                scope="col"
                className="text-md font-medium
                px-6 py-4 text-left"
              >
                Số tiền quyên góp
              </th>
              <th
                scope="col"
                className="text-md font-medium
                px-6 py-4 text-left"
              >
                Thời gian
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedPayments.map((payment, i) => (
              <Backer key={i} payment={payment} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const Backer = ({ payment }) => (
  <tr className="border-b border-gray-200">
    <td
      className="text-md font-normal
      px-6 py-4 whitespace-nowrap"
    >
      <div className="flex justify-start items-center space-x-3">
        <Identicon
          className="h-10 w-10 object-contain rounded-full shadow-md"
          string={payment.attributes.paymentName}
          size={25}
        />
        <span>{payment.attributes.paymentName}</span>
      </div>
    </td>
    <td className="text-md font-light px-6 py-4 whitespace-nowrap">
      <small className="flex justify-start items-center space-x-1">
        <RiBnbLine />
        <span className="text-gray-700 font-medium">
          {payment.attributes.price} BNB
        </span>
      </small>
    </td>

    <td
      className="text-md font-normal
      px-6 py-4 whitespace-nowrap"
    >
      <Moment format="YYYY-MM-DD HH:mm:ss">
        {payment.attributes.createdAt}
      </Moment>
    </td>
  </tr>
)

export default ListDonates
