import React from "react"
import { BsArrowRight } from "react-icons/bs"
import Slider from "react-slick"
import Button from "../Button/Button"

const Blogs = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true
  }

  const blogs = [
    {
      id: 1,
      title: "Tầm nhìn",
      desc: "Đến năm 2030 là tổ chức nhân đạo chuyên nghiệp, đóng vai trò nòng cốt, cầu nối, đầu mối, điều phối trong hoạt động nhân đạo, từ thiện tại Việt Nam, tham gia hiệu quả các hoạt động nhân đạo quốc tế, đến năm 2045 trở thành Hội quốc gia mạnh trong khu vực Châu Á – Thái Bình Dương.",
      img: "https://sosvietnam.org/getmedia/e6302f07-44a2-4df9-a62d-7f5b3d914519/_DSC0126_Go_Vap_Blue_Bamboo.jpg?amp;height=399&width=425"
    },
    {
      id: 2,
      title: "Sứ mệnh",
      desc: "Kiến tạo môi trường, truyền cảm hứng cho các hoạt động nhân đạo, lan tỏa lòng nhân ái, góp phần thực hiện mục tiêu dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh.",
      img: "https://sosvietnam.org/getmedia/44cd3c45-96d0-42f2-9533-524827fc6aae/IMG_0203.JPG?amp;height=400&width=425"
    },
    {
      id: 3,
      title: "Giá trị cốt lõi",
      desc: "Nhân đạo, vô tư, tự nguyện, chuyên nghiệp, minh bạch, thích ứng, hiệu quả, góp phần lan tỏa, làm nòng cốt, đầu mối kết nối, điều phối trong công tác chữ thập đỏ, hoạt động nhân đạo và hợp tác quốc tế trong lĩnh vực nhân đạo.",
      img: "https://cdnphoto.dantri.com.vn/Vs093fkJu780hl_39DZ9C1SXLms=/zoom/576_384/2024/08/01/14a-edited-1722504776441.jpeg"
    }
  ]
  return (
    <div className="">
      <div className="mt-6">
        <div>
          <Slider {...settings}>
            {blogs.map((blog) => (
              <div key={blog.id}>
                <div className="flex">
                  <div className="w-5/6">
                    <p className="font-bold text-3xl pb-8 text-center">
                      {blog.title}
                    </p>
                    <div className="flex -flex-col justify-center items-center">
                      <img
                        src={blog.img}
                        alt=""
                        className="w-52 h-52 rounded-full object-cover mr-8"
                      />
                      <p className="text-base">{blog.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Blogs
