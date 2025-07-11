import HomeContent from "@/components/home/content";
import HomeHero from "@/components/home/hero";
import HomeSocialProof from "@/components/home/socialProof";
import HomeTestimonials from "@/components/home/testimonials";
import HomeUsers from "@/components/home/users";

export default function HomePage() {
    return (
        <div className="bg-[url('/line.png')] bg-no-repeat bg-center bg-cover">
            <HomeHero/>
            <HomeSocialProof/>
            <HomeContent />
            <HomeUsers />
            <HomeTestimonials />
        </div>
    )
}