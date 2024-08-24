import React from "react"
import logo from "../../img/theanh.png"
const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#f4f4f4]">
        <div className="py-10 px-16 w-[1280px] mx-auto">
          <p className="text-base text-[#4e4e4e] font-medium">
            <span className="text-main text-2xl">HopeFund</span> với slogan
            <span className="italic">"Chung tay gieo mầm hy vọng"</span>, là tổ
            chức thiện nguyện hoạt động nhằm mục đích thông qua các hoạt động
            gây quỹ để thực hiện các hoạt động thiện nguyện xã hội, hỗ trợ những
            hoàn cảnh khó khăn, sau đó lan tỏa tinh thần tương thân, tương ái,
            chia sẻ và chung tay với cộng đồng, xã hội góp phần xây dựng một
            cuộc sống tốt đẹp hơn.
            <br />
            <br /> Với <span className="text-main">HopeFund</span>, chúng mình
            mong muốn có thể kết nối mọi người cùng nhau chung tay gây dựng quỹ
            phát triển để thực hiện được những hoạt động thực sự ý nghĩa. Chúng
            mình biết khi mà mọi người khá là bận rộn với công việc, có thể muốn
            làm các hoạt động thiện nguyện nhưng khó sắp xếp được thời gian hoặc
            gặp khó khăn trong việc kết nối thì với chúng mình sẽ trở thành cầu
            nối để mọi người có thể chung tay vào các dự án thiện nguyện trong
            thời gian sắp tới.
            <br />
            <br />
            Là địa chỉ đáng tin cậy về việc triển khai các hoạt động nhân đạo,
            từ thiện một cách chuyên nghiệp, bài bản, minh bạch, uy tín trên
            Việt Nam. Định hướng: thu hút nhiều nguồn lực từ thiện trong và
            ngoài nước, cùng xây dựng{" "}
            <span className="text-main">HopeFund</span> ngày càng lớn mạnh, đem
            lại nhiều giá trị nhân ái, nhân văn cho cộng đồng xã hội.
          </p>
          <div className="mt-4">
            <p className="font-bold">Thông tin kết nối với chúng tôi:</p>
            <p className="font-bold">SĐT / Zalo: 0865492101</p>
            <p className="font-bold">Email: nvanh@gmail.com</p>
            <p>
              <a href="" className="font-bold text-blue-700">
                Facebook
              </a>
            </p>
            <p className="font-bold">Cảm ơn và trân trọng!:</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-auto">
        <div className="flex flex-col py-10 px-16 w-[1280px] ">
          <h3 className="text-4xl font-bold text-center">Đội ngũ sáng lập</h3>
          <div className="flex gap-30 overflow-x-hidden justify-between mt-10">
            <div className="">
              <img src={logo} alt="" className="rounded-full w-56 h-56" />
              <h4 className="text-center mt-4 font-medium">Nguyễn Văn Anh</h4>
            </div>
            <div className="">
              <img src={logo} alt="" className="rounded-full w-56 h-56" />
              <h4 className="text-center mt-4 font-medium">Nguyễn Văn Anh</h4>
            </div>
            <div className="">
              <img src={logo} alt="" className="rounded-full w-56 h-56" />
              <h4 className="text-center mt-4 font-medium">Nguyễn Văn Anh</h4>
            </div>
            <div className="">
              <img src={logo} alt="" className="rounded-full w-56 h-56" />
              <h4 className="text-center mt-4 font-medium">Nguyễn Văn Anh</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
