import CTA from "@/components/layout/cta";
import WebinarFeatures from "@/components/webinar/features";
import WebinarHero from "@/components/webinar/hero";

export default function WebinarPage() {
    return (
        <div>
            <WebinarHero />
            <WebinarFeatures />
            <CTA />
        </div>
    )
}