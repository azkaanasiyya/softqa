"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MobileSectionSelect } from "./selectid";
import FadeInSection from "@/components/animation/fadein";

export default function ContentWebDetail() {

const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
            const visible = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
            if (visible) {
                setActiveId(visible.target.id);
            }
            },
            {
            rootMargin: "-30% 0px -60% 0px",
            threshold: 0.5,
            }
        );
        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
        }, []);

    return (
        <div className="flex flex-col justify-center items-center pt-6 md:pt-8 lg:pt-8 px-6 md:px-8 lg:px-[124px] pb-12 md:pb-20 lg:pb-[104px]">
            <FadeInSection delay={0.5} className="max-w-[1192px] flex flex-col gap-12 lg:gap-[88px]">
                <div className="flex flex-row gap-1 items-start">
                    <span className="text-[16px] leading-6 text-grayscale-900">Webinar</span>
                    <span className="text-[16px] leading-6 text-grayscale-500 w-4 flex flex-col justify-center items-center">/</span>
                    <span className="text-[16px] leading-6 text-grayscale-400">Achieving 100% Test Coverage</span>
                </div>
                <FadeInSection delay={0.5} className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-10 md:gap-16">
                        <div className="flex flex-col gap-4 items-center w-full max-w-[784px]">
                            <h2 className="text-[40px] md:text-[48px] leading-[50px] md:leading-[60px] text-center text-grayscale-900">Achieving 100% Test Coverage</h2>
                            <p className="text-[18px] md:text-[20px] leading-[32px] md:leading-9 max-w-[736px] text-grayscale-600 text-center">Learn how to utilize batch mode and automation tools to cover all your test cases and minimize technical debt.</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 md:justify-between items-start md:items-center w-full">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12">
                                <div className="flex flex-row gap-4 items-center">
                                    <Image src="/webinar/david-icon.png" alt="icon" width={40} height={40} />
                                    <div className="flex flex-col items-start h-10">
                                        <span className="text-[16px] leading-6 text-grayscale-900">David Kim</span>
                                        <span className="text-[14px] leading-[22px] text-grayscale-500">Automation Architect</span>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4 items-center">
                                    <Image src="/webinar/james-icon.png" alt="icon" width={40} height={40} />
                                    <div className="flex flex-col items-start h-10">
                                        <span className="text-[16px] leading-6 text-grayscale-900">James</span>
                                        <span className="text-[14px] leading-[22px] text-grayscale-500">Moderator</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-8">
                                <div className="flex flex-row gap-2 items-center">
                                    <Image src="/webinar/calendar.png" alt="icon" width={20} height={20} />
                                    <span className="text-[14px] md:text-[16px] leading-[22px] md:leading-6 text-grayscale-900">March 18, 2024</span>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <Image src="/webinar/clock.png" alt="icon" width={20} height={20} />
                                    <span className="text-[14px] md:text-[16px] leading-[22px] md:leading-6 text-grayscale-900">57 mins</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src="/webinar/david-kim.png" alt="icon" width={1192} height={624} className="lg:w-[1192px] lg:h-[624px] w-full h-full" />
                </FadeInSection>
                <FadeInSection delay={0.5} className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <MobileSectionSelect activeId={activeId} setActiveId={setActiveId} />
                    <div className="lg:sticky lg:top-24 hidden md:flex md:flex-col gap-8 max-w-[274px]">
                        <div className="flex flex-col gap-3">
                            <span className="text-[16px] leading-6 text-grayscale-900">0:00 - 12:00</span>
                            <div className="flex flex-col gap-2">
                                <a href="#section-1" onClick={() => setActiveId("section-1")} className="flex flex-row gap-2 items-center">
                                    <div className={`h-[16px] w-[2px] ${activeId === 'section-1' ? 'bg-primary-500' : 'bg-grayscale-200'}`} />
                                    <p className={`text-[16px] font-normal leading-[24px] ${activeId === 'section-1' ? 'text-primary-500' : 'text-grayscale-500'}`}>Introduction and Overview</p>
                                </a>
                                <a href="#section-1-2" onClick={() => setActiveId("section-1-2")} className="flex flex-row gap-2 items-center">
                                    <div className={`h-[16px] w-[2px] ${activeId === 'section-1-2' ? 'bg-primary-500' : 'bg-grayscale-200'}`} />
                                    <p className={`text-[16px] font-normal leading-[24px] ${activeId === 'section-1-2' ? 'text-primary-500' : 'text-grayscale-500'}`}>Why Achieve 100% Test Coverage?</p>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-[16px] leading-6 text-grayscale-900">12:01 - 30:00</span>
                            <div className="flex flex-col gap-2">
                                <a href="#section-2" onClick={() => setActiveId("section-2")} className="flex flex-row gap-2 items-start">
                                    <div className={`h-[16px] w-[2px] ${activeId === 'section-2' ? 'bg-primary-500' : 'bg-grayscale-200'}`} />
                                    <p className={`text-[16px] font-normal leading-[24px] ${activeId === 'section-2' ? 'text-primary-500' : 'text-grayscale-500'}`}>Efficient Test Execution with Batch Mode</p>
                                </a>
                                <a href="#section-2-2" onClick={() => setActiveId("section-2-2")} className="flex flex-row gap-2 items-center">
                                    <div className={`h-[16px] w-[2px] ${activeId === 'section-2-2' ? 'bg-primary-500' : 'bg-grayscale-200'}`} />
                                    <p className={`text-[16px] font-normal leading-[24px] ${activeId === 'section-2-2' ? 'text-primary-500' : 'text-grayscale-500'}`}>Automation Tools and Frameworks</p>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-[16px] leading-6 text-grayscale-900">30:01 - 50:00</span>
                            <div className="flex flex-col gap-2">
                                <a href="#section-3" onClick={() => setActiveId("section-3")} className="flex flex-row gap-2 items-start">
                                    <div className={`h-[16px] w-[2px] ${activeId === 'section-3' ? 'bg-primary-500' : 'bg-grayscale-200'}`} />
                                    <p className={`text-[16px] font-normal leading-[24px] ${activeId === 'section-3' ? 'text-primary-500' : 'text-grayscale-500'}`}>Managing Technical Debt Through Testing</p>
                                </a>
                                <a href="#section-3-2" onClick={() => setActiveId("section-3-2")} className="flex flex-row gap-2 items-start">
                                    <div className={`h-[16px] w-[2px] ${activeId === 'section-3-2' ? 'bg-primary-500' : 'bg-grayscale-200'}`} />
                                    <p className={`text-[16px] font-normal leading-[24px] ${activeId === 'section-3-2' ? 'text-primary-500' : 'text-grayscale-500'}`}>Actionable Strategies for High Coverage</p>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-[16px] leading-6 text-grayscale-900">50:01 - 57:00</span>
                            <a href="#section-4" onClick={() => setActiveId("section-4")} className="flex flex-row gap-2 items-center">
                                <div className={`h-[16px] w-[2px] ${activeId === 'section-4' ? 'bg-primary-500' : 'bg-grayscale-200'}`} />
                                <p className={`text-[16px] font-normal leading-[24px] ${activeId === 'section-4' ? 'text-primary-500' : 'text-grayscale-500'}`}>Final Thoughts</p>
                            </a>
                        </div>
                    </div>
                    <div className="lg:overflow-y-auto lg:[&::-webkit-scrollbar]:hidden lg:[-ms-overflow-style:none] lg:[scrollbar-width:none] lg:max-h-screen flex flex-col gap-12 lg:gap-[72px] lg:pl-16">
                        <section id="section-1" className="flex flex-col gap-4 max-w-[822px]">
                            <h1 className="text-[40px] md:text-[56px] leading-[50px] md:leading-[70px] text-grayscale-900">0:00 - 12:00</h1>
                            <div className="flex flex-col gap-16">
                                <div className="flex flex-col gap-10">
                                    <h4 id="section-1" className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 text-grayscale-900">Introduction and Overview</h4>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Hi, and welcome to this episode of the Achieving 100% Test Coverage podcast. <br /> <br />I&apos;m James, your host for today, and I have the pleasure of being joined by our guest, David Kim. David, thanks for joining us.</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Thanks for having me, James.</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">David, you&apos;re known for your expertise in QA strategy. Could you give our listeners a bit of background on how you became passionate about testing and achieving full coverage?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Absolutely. I started as a developer, but I quickly realized how testing bridges the gap between good and great software. Over the years, I&apos;ve focused on optimizing QA workflows and tools, which brings me here to share strategies on 100% test coverage.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10">
                                    <h4 id="section-1-2" className="text-[32px] leading-10 text-grayscale-900">Why Achieve 100% Test Coverage?</h4>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Let’s start with the big question—why aim for 100% test coverage?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Achieving full coverage isn&apos;t just about numbers; it’s about ensuring your code works as intended under all conditions. It reduces bugs in production and makes the code more maintainable. However, it’s equally important to balance effort with value.</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Do you have an example where high test coverage led to significant improvements?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Sure. I worked with a team where low test coverage caused recurring production bugs. By systematically increasing their coverage, they reduced their bug count by 80% within six months.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="section-2" className="flex flex-col gap-4 max-w-[822px]">
                            <h1 className="text-[40px] md:text-[56px] leading-[50px] md:leading-[70px] text-grayscale-900">12:01 - 30:00</h1>
                            <div className="flex flex-col gap-16">
                                <div className="flex flex-col gap-10">
                                    <h4 id="section-2" className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 text-grayscale-900">Efficient Test Execution with Batch Mode</h4>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">David, batch mode seems like a game changer for test execution. Can you explain what it is?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Batch mode allows you to group and execute tests in parallel, which significantly speeds up testing during CI/CD pipelines.</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">What tools would you recommend for implementing batch mode?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Tools like Jenkins, GitHub Actions, and CircleCI are excellent. The key is to properly configure parallelization so tests don’t interfere with each other.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10">
                                    <h4 id="section-2-2" className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 text-grayscale-900">Automation Tools and Frameworks</h4>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">What role do automation tools play in achieving full test coverage?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Automation is essential. It reduces repetitive manual tasks and ensures scalability as your application grows. Popular tools like Selenium and Cypress make it easier to integrate testing into your development workflow.</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">What’s your advice for teams just starting with automation?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Focus on your application’s most critical paths first. Don’t automate everything—prioritize high-impact areas.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="section-3" className="flex flex-col gap-4 max-w-[822px]">
                            <h1 className="text-[40px] md:text-[56px] leading-[50px] md:leading-[70px] text-grayscale-900">30:01 - 50:00</h1>
                            <div className="flex flex-col gap-16">
                                <div className="flex flex-col gap-10">
                                    <h4 id="section-3" className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 text-grayscale-900">Managing Technical Debt Through Testing</h4>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">How does testing help in managing technical debt?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Good tests act as documentation for your code’s behavior, making refactoring less risky. They also catch issues early, reducing the long-term cost of fixes.</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">What’s the best way to maintain tests?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Tests need to evolve with your codebase. Regularly update them to reflect new features or changes, and make them part of your development workflow.</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">What’s the best way to maintain tests?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Tests need to evolve with your codebase. Regularly update them to reflect new features or changes, and make them part of your development workflow.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10">
                                    <h4 id="section-3-2" className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 text-grayscale-900">Actionable Strategies for High Coverage</h4>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">What’s your step-by-step guide to achieving high test coverage?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Start small by focusing on critical areas. Use automation tools for repetitive tasks. Foster collaboration between developers and QA teams to ensure everyone takes ownership of quality.</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">How can teams integrate test coverage into agile workflows?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Include test coverage metrics in your sprints. Make it a shared goal for the team rather than a QA-only responsibility.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="section-4" className="flex flex-col gap-4 max-w-[822px]">
                            <h1 className="text-[40px] md:text-[56px] leading-[50px] md:leading-[70px] text-grayscale-900">50:01 - 57:00</h1>
                            <div className="flex flex-col gap-10">
                                <h4 id="section-4" className="text-[24px] md:text-[32px] leading-[30px] md:leading-10 text-grayscale-900">Final Thoughts</h4>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">David, any closing advice for teams working toward 100% test coverage?</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/david-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">David Kim</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Test coverage is an investment. It takes time upfront but pays off in reduced bugs and faster development cycles. Start small, focus on value, and use the right tools.</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row gap-3 items-center">
                                                <Image src="/webinar/james-icon.png" alt="icon" width={32} height={32} />
                                                <span className="text-[18px] leading-7 text-grayscale-900">James</span>
                                            </div>
                                            <p className="text-[16px] md:text-[18px] leading-7 md:leading-8 text-grayscale-600">Thanks, David, for sharing your insights. To our listeners, if you have feedback or questions about this episode, feel free to reach out. And don’t forget to prioritize quality in your development practices.</p>
                                        </div>
                                    </div>
                            </div>
                        </section>
                        <div className="bg-primary-50 flex flex-row items-center justify-between w-full rounded-[12px] p-4 md:p-6">
                            <span className="text-[16px] md:text-[24px] leading-6 md:leading-[30px] font-medium md:font-normal text-grayscale-900">Share this webinar?</span>
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-col items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary-500">
                                    <Image src="/webinar/link.png" alt="icon" width={20} height={20} className="w-[15px] h-[15px] md:w-5 md:h-5"/>
                                </div>
                                <div className="flex flex-col items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary-500">
                                    <Image src="/webinar/fb.png" alt="icon" width={16} height={16} className="w-3 h-3 md:w-4 md:h-4"/>
                                </div>
                                <div className="flex flex-col items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary-500">
                                    <Image src="/webinar/x.png" alt="icon" width={16} height={16} className="w-3 h-3 md:w-4 md:h-4"/>
                                </div>
                                <div className="flex flex-col items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary-500">
                                    <Image src="/webinar/linkedin.png" alt="icon" width={16} height={16} className="w-3 h-3 md:w-4 md:h-4"/>
                                </div>
                            </div>
                        </div>
                    </div> 
                </FadeInSection>
            </FadeInSection>
        </div>
    )
}