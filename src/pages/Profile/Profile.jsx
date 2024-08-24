import { useState } from "react"
import SupportedProjects from "./component/SupportedProjects"
import ProfileDetail from "./component/ProfileDetail"
import { Outlet } from "react-router-dom"

const Profile = () => {
  const [activeComponent, setActiveComponent] = useState(1)

  const handleActiveComponent = (componentNumber) => {
    setActiveComponent(componentNumber)
  }
  return (
    <div className="flex w-10/12 m-auto">
      <div className="w-full h-full mt-20 ml-2">
        {/* <div className="border-b pb-2 border-gray-400 w-full">
          <ul className="flex justify-center">
            <li
              onClick={() => handleActiveComponent(1)}
              className={`py-3 font-medium text-xl mx-6 cursor-pointer ${
                activeComponent === 1
                  ? "text-gray-800 border-b-2 border-main"
                  : "text-gray-400 hover:text-main"
              }`}
            >
              Thông tin
            </li>
            <li
              onClick={() => handleActiveComponent(2)}
              className={`py-3 font-medium text-xl mx-6 cursor-pointer ${
                activeComponent === 2
                  ? "text-gray-800 border-b-2 border-main"
                  : "text-gray-400 hover:text-main"
              }`}
            >
              Dự án đã ủng hộ
            </li>
          </ul>
        </div>
        {activeComponent === 1 && <ProfileDetail />}
        {activeComponent === 2 && <SupportedProjects />} */}
        <Outlet />
      </div>
    </div>
  )
}

export default Profile
