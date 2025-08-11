import HomeContent from "@/components/home/content";
import FAQs from "@/components/common/faqs";
import HomeHero from "@/components/home/hero";
import SocialProof from "@/components/common/socialProof";
import HomeTestimonials from "@/components/home/testimonials";
import HomeUsers from "@/components/home/users";
import CTA from "@/components/layout/cta";

export default function HomePage() {
    return (
        <div className="">
            <HomeHero/>
            <SocialProof/>
            <HomeContent />
            <HomeUsers />
            <HomeTestimonials />
            <FAQs />
            <CTA />
        </div>
    )
}