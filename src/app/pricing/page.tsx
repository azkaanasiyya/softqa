import FAQs from "@/components/common/faqs";
import PricingComparison from "@/components/pricing/comparison";
import PricingHero from "@/components/pricing/hero";

export default function PricingPage() {
    return (
        <div>
            <PricingHero />
            <PricingComparison />
            <FAQs />
        </div>
    )
}