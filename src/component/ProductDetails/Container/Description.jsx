import React from "react"
import { baseURLImg } from "../../../utils/api"
import { FaFacebook } from "react-icons/fa"
import { useSelector } from "react-redux"

const Description = (props) => {
  const product = props?.product
  const benefactorName =
    product?.attributes?.benefactors?.data?.attributes?.benefactorsName

  const benefactorsDesc =
    product?.attributes?.benefactors?.data?.attributes?.benefactorsDesc

  const collectionImg = useSelector(
    (state) =>
      state?.collection?.collection?.data?.[0]?.attributes?.collectionImg
        ?.data?.[0]?.attributes?.url
  )

  return (
    <div>
      <div className="flex">
        <div className="w-4/6 mr-4 my-4">
          <div className="flex mt-4 items-center">
            <div>
              {product?.attributes?.productDesc
                .split("\n")
                .map((paragraph, index) => (
                  <p key={index} className="text-[#686C9A]">
                    {paragraph}
                    <br />
                  </p>
                ))}
              <img
                class="object-contain"
                src={
                  baseURLImg +
                  (Array.isArray(product?.attributes?.productImg?.data) &&
                  product.attributes.productImg.data.length > 0 &&
                  product.attributes.productImg.data[0]?.attributes?.url
                    ? product.attributes.productImg.data[0].attributes.url
                    : "")
                }
                alt=""
              />
              <div className="mt-6 bg-[#E3E3E3] text-[#686C9A] p-1">
                <p className="italic">
                  *Toàn bộ số tiền quyên góp từ cộng đồng sẽ tự động chuyển
                  thẳng tới <span>{benefactorName}&nbsp;</span>
                  <span className="text-main font-medium">
                    (không qua HopeFund)
                  </span>
                  . Thông tin cập nhật về chương trình sẽ được cập nhật tại mục
                  Báo cáo của dự án này.
                </p>
              </div>
              <p className="font-bold text-lg text-black mt-5 mb-2">
                Chia sẻ dự án
              </p>
              <div className="flex gap-2 bg-[#1877f2] p-2 w-28 rounded-lg">
                <FaFacebook
                  style={{
                    color: "#fff",
                    background: "#1877F2",
                    fontSize: "1.5rem"
                  }}
                />
                <a
                  href="https://www.facebook.com/"
                  className="text-white inline-block"
                >
                  Chia sẻ
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/6 ml-4">
          <div className="bg-[#F6F3F1] rounded-sm p-8">
            <span className="text-gray-500">Thông tin tổ chức quỹ</span>
            <div className="flex items-center justify-center mt-6 gap-6">
              <img
                class="object-contain w-12 lg:h-12 "
                src={`${baseURLImg}` + `${collectionImg}`}
                alt=""
              />
              <span className="text-black font-bold text-2xl">
                {benefactorName}
              </span>
            </div>

            <blockquote class="text-sm mt-4 font-semibold text-gray-800 leading-6 ">
              <p className="italic">"{benefactorsDesc}"</p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
