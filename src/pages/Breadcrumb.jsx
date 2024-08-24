import { Link } from "react-router-dom"
const Breadcrumb = ({ path }) => {
  const pathMap = {
    "/du-an": "Dự án",
    "/ve-chung-toi": "Về chúng tôi",
    "/ung-ho-hopefund": "Ủng hộ HopeFund"
  }

  return (
    <>
      <div className="bg-transparent py-2 px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <span className="text-white font-bold text-5xl text-center">
          {pathMap[path]}
        </span>
        <div className="mt-8">
          <Link to="/" className=" text-white font-bold text-lg">
            Trang chủ
          </Link>
          <span className="mx-2 text-white">/</span>
          <span className="text-gray-400 text-lg font-bold">
            {pathMap[path]}
          </span>
        </div>
      </div>
    </>
  )
}
export default Breadcrumb
