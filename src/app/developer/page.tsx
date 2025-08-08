import DeveloperFeatures from "@/components/developer/features";
import DeveloperHero from "@/components/developer/hero";
import SocialProofDev from "@/components/developer/socialproofdev";
import DeveloperValue from "@/components/developer/value";
import CTA from "@/components/layout/cta";

export default function DeveloperPage() {
    return (
        <div>
            <DeveloperHero />
            <DeveloperValue />
            <DeveloperFeatures />
            <SocialProofDev />
            <CTA />
        </div>
    )
}