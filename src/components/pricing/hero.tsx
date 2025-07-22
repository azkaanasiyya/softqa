import { Button } from "../ui/button";
import Image from "next/image";

export default function PricingHero() {
    return (
        <div className="bg-[url('/pricing/bg-hero-pricing.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center pt-20 pb-16 lg:py-[104px] px-6 md:px-8 lg:px-[124px]">
            <div className="max-w-[1192px] flex flex-col gap-16 items-center">
                <div className="flex flex-col gap-4 items-center">
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex flex-row gap-2">
                            <div className="h-[22px] w-[1px] bg-cyan-500" />
                            <p className="text-[14px] font-medium leading-[22px] uppercase text-cyan-500">pricing</p>
                        </div>
                        <h1 className="text-[56px] leading-[70px] font-normal text-base-white text-center">Scale Your Testing</h1>
                    </div>
                    <p className="max-w-[654px] text-[18px] leading-8 font-normal text-[#FFFFFFEB] text-center">From startup to enterprise, find the perfect plan to fit your needs and enhance your QA. Unlock the power of autonomous testing with SoftQA today.</p>
                </div>
                <div className="flex flex-col gap-[72px]">
                    <div className="flex flex-col lg:flex-row items-center lg:items-end">
                        <div className="bg-primary-900 flex flex-col gap-8 p-8 rounded-[16px] border-2 border-[#FFFFFF0F] lg:max-w-[397.33px] w-full min-h-[678px]">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-1">
                                        <h5 className="text-[24px] leading-6 font-normal text-base-white">Starter</h5>
                                        <p className="text-[16px] leading-6 font-normal text-[#FFFFFFEB]">For individuals and small teams automating their first tests</p>
                                    </div>
                                    <div className="flex flex-row gap-2 items-end">
                                        <h2 className="text-[48px] leading-[60px] text-base-white font-normal">$29</h2>
                                        <p className="text-[16px] pb-2.5 leading-6 text-[#FFFFFFEB]">/month</p>
                                    </div>
                                </div>
                                <Button variant="pricing" size="big" className="cursor-pointer text-cyan-500">Get Started</Button>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Access to core QA automation tools</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Up to 5 test scripts</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Basic reporting and analytics</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Test execution on Chrome browser</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">24/7 support via chat</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Prebuilt templates for common test cases</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Code Change Adapter</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">CI Pipeline Integration</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-[3px] rounded-[16px] bg-gradient-to-b from-[#B5FFFE] to-[#12454B] lg:max-w-[397.33px] w-full min-h-[694px]">
                            <div className="bg-[#12454B] flex flex-col gap-8 p-8 rounded-[16px] h-[694px] ">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex flex-row gap-2 items-end">
                                                <h5 className="text-[24px] leading-6 font-normal text-base-white">Team</h5>
                                                <div className="bg-white-opacity-12 rounded-[8px] py-1 px-2 text-[11px] leading-[18px] uppercase font-medium text-cyan-500">popular</div>
                                            </div>
                                            <p className="text-[16px] leading-6 font-normal text-[#FFFFFFEB]">For teams scaling QA testing across multiple projects</p>
                                        </div>
                                        <div className="flex flex-row gap-2 items-end">
                                            <h2 className="text-[48px] leading-[60px] text-base-white font-normal">$99</h2>
                                            <p className="text-[16px] pb-2.5 leading-6 text-[#FFFFFFEB]">/month</p>
                                        </div>
                                    </div>
                                    <Button variant="get" size="big" className="cursor-pointer text-primary-900">Get Started</Button>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-row gap-3 items-center">
                                        <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                        <p className="text-[16px] font-medium leading-6 text-white-opacity-80">Everything in Starter, plus:</p>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center">
                                        <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                        <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Unlimited test scripts</p>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center">
                                        <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                        <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Cross-browser testing</p>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center">
                                        <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                        <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Parallel test execution</p>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center">
                                        <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                        <p className="text-[16px] font-normal leading-6 text-white-opacity-80">CI/CD pipeline integrations</p>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center">
                                        <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                        <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Priority support with SLA</p>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center">
                                        <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                        <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Advanced reporting with dashboards</p>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center">
                                        <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                        <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Collaborative test management</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary-900 flex flex-col gap-8 p-8 rounded-[16px] border-2 border-[#FFFFFF0F] lg:max-w-[397.33px] w-full lg:h-[678px] h-auto">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-1">
                                        <h5 className="text-[24px] leading-6 font-normal text-base-white">Enterprise</h5>
                                        <p className="text-[16px] leading-6 font-normal text-[#FFFFFFEB]">For organizations automating complex QA workflows at scale</p>
                                    </div>
                                    <h2 className="text-[48px] leading-[60px] text-base-white font-normal">Custom</h2>
                                </div>
                                <Button variant="pricing" size="big" className="cursor-pointer text-cyan-500">Get Started</Button>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-medium leading-6 text-white-opacity-80">Everything in Team, plus:</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Unlimited projects and users</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Dedicated infrastructure and hosting</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Custom integrations via API</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">AI-powered test creation and <br />maintenance</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Comprehensive test coverage analysis</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Enterprise-grade security and compliance</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <Image src="/pricing/check.png" alt="starter" width={20} height={20} className="w-[20px] h-[20px]"/>
                                    <p className="text-[16px] font-normal leading-6 text-white-opacity-80">Dedicated account manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 px-[101px]">
                      <Image src="/pricing/female.png" alt="icon" width={56} height={56} className="w-14 h-14"/>
                      <div className="flex flex-col gap-6 items-center max-w-[779px]">
                        <p className="text-[24px] leading-[42px] font-normal text-center text-base-white">“SoftQA has transformed how our team approaches testing. The automation tools are intuitive, and the detailed analytics have significantly improved our product quality.”</p>
                        <p className="text-[16px] leading-6 font-normal text-center text-[#FFFFFFEB]">Russel Alexander</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}