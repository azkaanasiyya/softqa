import Image from "next/image"
import Link from "next/link"
import { InputWebinar } from "../custom/inputwebinar"
import { SelectCategories } from "./selectcategories"
import { SelectRecent } from "./selectrecent"
import { webinars } from "../data/webinars"

export default function WebinarFeatures() {
  return (
    <div className="bg-base-white flex flex-col justify-center items-center pt-[48.49px] pb-12 md:py-16 lg:pt-[124px] lg:pb-[132px] px-6 md:px-8 lg:px-[124px]">
      <div className="max-w-[1192px] flex flex-col gap-4 md:gap-6 lg:gap-10">
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:justify-between items-stretch lg:items-center">
          <h3 className="text-[32px] md:text-[40px] leading-10 md:leading-[50px] text-grayscale-900 w-full">
            Watch past webinars
          </h3>
          <div className="flex flex-row gap-4 w-full">
            <InputWebinar placeholder="Search webinar..." />
            <SelectRecent />
            <SelectCategories />
            <div className="flex flex-col md:hidden items-center justify-center w-12 h-12 rounded-[12px] border-2 border-grayscale-100">
              <Image
                src="/webinar/filter.png"
                alt="icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {webinars.map((item, i) => (
              <div
                key={i}
                className="bg-grayscale-50 rounded-[16px] p-2 lg:min-h-[456px] flex flex-col"
              >
                <div className={`${item.tagColor} rounded-[12px] pl-[13.82px] md:pl-[14.58px] lg:pl-4 flex flex-row gap-6 justify-between`}>
                  <div className="flex flex-col max-w-[164px] items-start justify-between my-[13.82px] md:my-[14.58px] lg:my-4">
                    <h4 className="text-[27.46px] md:text-[29.16px] lg:text-[32px] leading-[34.56px] md:leading-[36.44px] lg:leading-10 text-grayscale-900">
                      {item.title}
                    </h4>
                    <div className="rounded-[17px] border border-grayscale-900 py-1 px-2">
                      <p className="text-[10px] leading-[150%] text-grayscale-900">{item.tag}</p>
                    </div>
                  </div>
                  <Image
                    src={item.image}
                    alt="webinar"
                    width={156}
                    height={212}
                    className="rounded-tr-[12px] rounded-br-[12px] object-cover object-bottom w-[134.77px] h-[183.14px] md:w-[142.13px] md:h-[193.16px] lg:w-[156px] lg:h-[212px]"
                  />
                </div>

                <div className="flex flex-col justify-between gap-6 py-4 px-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[14px] leading-[22px] text-grayscale-600">{item.date}</p>
                    <div className="flex flex-col gap-1 lg:gap-3">
                      <h5 className="text-[18px] md:text-[24px] leading-7 md:leading-[30px] text-grayscale-900">
                        {item.subtitle}
                      </h5>
                      <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-grayscale-600 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <Link href="/webinar/webinardetail" className="cursor-pointer">
                    <div className="flex flex-row gap-1 items-end cursor-pointer">
                      <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-6 text-primary-500 font-medium underline">
                        Read more
                      </p>
                      <Image src="/webinar/icon.png" alt="icon" width={16} height={16} className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-[#FAFAFA] flex flex-col justify-center items-center rounded-full p-2">
                <Image src="/webinar/arrow-left.png" alt="Previous" width={16} height={16} />
              </div>
              <span className="hidden md:block text-[16px] leading-6 text-[#ABB1B9] font-medium">Previous</span>
            </div>

            <div className="flex flex-row items-center gap-2">
              <div className="bg-primary-500 rounded-[12px] px-1 pt-0.5 pb-1 w-10 h-10 flex flex-col items-center justify-center">
                <span className="w-8 h-6 text-[16px] text-center font-medium leading-6 text-base-white">1</span>
              </div>
              <div className="bg-base-white border-2 border-grayscale-100 rounded-[12px] px-1 pt-0.5 pb-1 w-10 h-10 flex flex-col items-center justify-center">
                <span className="w-8 h-6 text-[16px] text-center font-medium leading-6 text-primary-500">2</span>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <span className="hidden md:block text-[16px] leading-6 text-primary-900 font-medium">Next</span>
              <div className="bg-primary-500 flex flex-col justify-center items-center rounded-full p-2">
                <Image src="/webinar/arrow-right.png" alt="Next" width={16} height={16} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}