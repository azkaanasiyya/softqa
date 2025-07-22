import Image from "next/image";
import { Button } from "../ui/button";
import { TabsComparison } from "./tabscomparison";

export default function PricingComparison() {
    return (
        <div className="bg-[url('/pricing/bg-comparison.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center py-12 md:py-16 lg:py-[104px] px-6 md:px-8 lg:px-[124px]">
            <div className="max-w-[1192px] w-full flex lg:flex-row flex-col items-center gap-8 lg:gap-0">
                <h4 className="lg:hidden text-[32px] leading-10 text-center">Compare Plans</h4>
                <div className="block lg:hidden w-full">
                   <TabsComparison /> 
                </div>
                
                {/* <div className="lg:hidden flex flex-col w-full">
                    <div className="flex flex-col items-center">
                        <div className=""></div>
                    </div> 
                </div> */}
                <div className="hidden lg:flex lg:flex-col max-w-[381px] w-full">
                    <div className="pt-5 px-7 pb-7 text-[32px] leading-10 text-grayscale-900 font-normal">Compare Plans</div>
                    <div className="bg-base-white border border-grayscale-100 h-[72px] rounded-tl-[12px] py-6 px-7 text-[18px] leading-7 font-normal text-grayscale-900">Users</div>
                    <div className="bg-base-white border-b border-l border-grayscale-100 h-[72px] py-6 px-7 text-[18px] leading-7 font-normal text-grayscale-900">Test Script</div>
                    <div className="bg-base-white border-b border-l border-grayscale-100 h-[72px] py-6 px-7 text-[18px] leading-7 font-normal text-grayscale-900">Browser Support</div>
                    <div className="bg-base-white border-b border-l border-grayscale-100 h-[72px] py-6 px-7 text-[18px] leading-7 font-normal text-grayscale-900">Test Execution</div>
                    <div className="bg-base-white border-b border-l border-grayscale-100 h-[72px] py-6 px-7 text-[18px] leading-7 font-normal text-grayscale-900">Reporting & Analytics</div>
                    <div className="bg-base-white border-b border-l border-grayscale-100 h-[72px] py-6 px-7 text-[18px] leading-7 font-normal text-grayscale-900">Integrations</div>
                    <div className="bg-base-white border-b border-l border-grayscale-100 h-[72px] py-6 px-7 text-[18px] leading-7 font-normal text-grayscale-900">Security Features</div> 
                    <div className="bg-base-white border-b border-l border-grayscale-100 h-[72px] py-6 px-7 text-[18px] leading-7 font-normal text-grayscale-900">Support</div>
                    <div className="bg-base-white border-b border-l border-grayscale-100 h-[72px] py-6 px-7 text-[18px] leading-7 font-normal text-grayscale-900">Customization</div>
                    <div className="bg-base-white border-b border-l border-grayscale-100 h-[72px] py-6 px-7 text-[18px] leading-7 font-normal text-grayscale-900">AI Features</div>
                    <div className="bg-base-white border-b border-l border-grayscale-100 h-[72px] rounded-bl-[12px] py-6 px-7 text-[18px] leading-7 font-normal text-grayscale-900">Training & Onboarding</div>
                </div>
                <div className="bg-base-white hidden lg:flex lg:flex-col max-w-[270.33px] w-full">
                    <div className="flex flex-col items-center gap-0.5 h-[88px] rounded-tl-[16px] border-t border-l border-b border-grayscale-100 py-4">
                        <p className="text-[16px] leading-6 text-grayscale-500 font-normal">Starter</p>
                        <h5 className="text-[24px] leading-[30px] text-grayscale-900 font-normal">$29</h5>
                    </div>
                    <div className="border-b border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/sign.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <p className="text-[16px] leading-6 font-normal text-grayscale-900">Chrome</p>
                    </div>
                    <div className="border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/sign.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <p className="text-[16px] leading-6 font-normal text-grayscale-900">Chat (24/7)</p>
                    </div>
                    <div className="border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/sign.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-grayscale-100 rounded-bl-[16px] h-[96px] py-6 px-5 flex flex-col justify-center items-center">
                        <Button variant="login" size="medium" className="cursor-pointer text-primary-500 w-[230.33px]">Get Started</Button>
                    </div>
                </div>
                <div className="bg-base-white hidden lg:flex lg:flex-col max-w-[270.33px] w-full">
                    <div className="bg-primary-900 flex flex-col items-center gap-0.5 h-[88px] border-t border-l border-b border-grayscale-100 py-4">
                        <p className="text-[16px] leading-6 text-[#FFFFFFEB] font-normal">Team</p>
                        <h5 className="text-[24px] leading-[30px] text-base-white font-normal">$99</h5>
                    </div>
                    <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <p className="text-[16px] leading-6 font-normal text-grayscale-900">Chrome, Firefox, Safari</p>
                    </div>
                    <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <p className="text-[16px] leading-6 font-normal text-grayscale-900">Priority support</p>
                    </div>
                    <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/sign.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[96px] py-6 px-5 flex flex-col justify-center items-center">
                        <Button variant="request" size="medium" className="cursor-pointer text-cyan-500 w-[230.33px]">Get Started</Button>
                    </div>
                </div>
                <div className="bg-base-white hidden lg:flex lg:flex-col max-w-[270.33px] w-full">
                    <div className="flex flex-col items-center gap-0.5 h-[88px] rounded-tr-[16px] border border-grayscale-100 py-4">
                        <p className="text-[16px] leading-6 text-grayscale-500 font-normal">Enterprise</p>
                        <h5 className="text-[24px] leading-[30px] text-grayscale-900 font-normal">Custom</h5>
                    </div>
                    <div className="border-b border-l border-r border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-r border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-r border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <p className="text-[16px] leading-6 font-normal text-grayscale-900">All browsers + mobile testing</p>
                    </div>
                    <div className="border-b border-l border-r border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-r border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-r border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-r border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-r border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <p className="text-[16px] leading-6 font-normal text-grayscale-900">Dedicated account manager</p>
                    </div>
                    <div className="border-b border-l border-r border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-r border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-r border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                        <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="border-b border-l border-r border-grayscale-100 rounded-br-[16px] h-[96px] py-6 px-5 flex flex-col justify-center items-center">
                        <Button variant="login" size="medium" className="cursor-pointer text-primary-500 w-[230.33px]">Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}