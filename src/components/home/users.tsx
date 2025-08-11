"use client";

import CountUp from "react-countup";
import FadeInSection from "../animation/fadein";

export default function HomeUsers() {
    return (
        <div className="bg-[url('/home/bg-users-mobile.png')] md:bg-[url('/home/bg-users.png'),_url('/line.png')] bg-no-repeat bg-center bg-cover py-12 md:py-20 lg:py-[132px] px-6 md:px-9 lg:px-[124px] border-x">
            <div className="flex flex-col items-center gap-6 md:gap-4">
                <CountUp
                    end={4587144}
                    duration={2}
                    separator=","
                    suffix="+"
                    enableScrollSpy
                    scrollSpyDelay={300}
                >
                    
                    {({countUpRef}) => (
                        <p 
                            ref={countUpRef as React.RefObject<HTMLParagraphElement>}
                            className="text-[56px] md:text-[88px] leading-[70px] md:leading-[125%] font-normal text-center text-cyan-500"
                        />
                    )}
                </CountUp>
                <FadeInSection delay={0.5} className="flex flex-col gap-3 md:gap-2 items-center justify-center max-w-[784px]">
                    <h4 className="text-[24px] md:text-[32px] font-normal leading-[30px] md:leading-[40px] text-center text-base-white">Unit tests written by Community Edition</h4>
                    <h6 className="text-[18px] md:text-[20px] leading-8 md:leading-[36px] font-normal text-white-opacity-72 text-center">SoftQA can write a complete and correct unit test every 2 seconds. Our AI are continuously being developed to achieve an efficient unit tests.</h6>
                </FadeInSection>
            </div>
        </div>
    )
}