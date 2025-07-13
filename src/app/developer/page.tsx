import DeveloperFeatures from "@/components/developer/features";
import DeveloperHero from "@/components/developer/hero";
import DeveloperValue from "@/components/developer/value";

export default function DeveloperPage() {
    return (
        <div>
            <DeveloperHero />
            <DeveloperValue />
            <DeveloperFeatures />
        </div>
    )
}