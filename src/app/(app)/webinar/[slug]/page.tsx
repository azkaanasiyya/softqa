// import { useParams } from "next/navigation";
import CTA from "@/components/layout/cta";
import ContentWebDetail from "@/components/webinar/webinardetail/contentwebdetail";
import MoreWebDetail from "@/components/webinar/webinardetail/morewebdetail";

export default function WebinarDetailPage() {
    // const params = useParams();
    // const slug = params?.slug;
    return (
        <div>
            <ContentWebDetail />
            <MoreWebDetail />
            <CTA />
        </div>
    )
}