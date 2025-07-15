import SocialProof from "@/components/common/socialProof";
import DeveloperFeatures from "@/components/developer/features";
import DeveloperHero from "@/components/developer/hero";
import DeveloperValue from "@/components/developer/value";
import CTA from "@/components/layout/cta";

export default function DeveloperPage() {
    return (
        <div>
            <DeveloperHero />
            <DeveloperValue />
            <DeveloperFeatures />
            <SocialProof />
            <CTA />
        </div>
    )
}