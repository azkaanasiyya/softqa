import Image from "next/image";

export default function Copy() {
    const handleCopy = async () => {
        try {
            const currentUrl = window.location.href;
            await navigator.clipboard.writeText(currentUrl);
            alert("Link copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy link: ", err);
        }
    };

    return (
        <button onClick={handleCopy} className="cursor-pointer flex flex-col items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary-500">
            <Image src="/webinar/link.png" alt="icon" width={20} height={20} className="hover:opacity-80 transition duration-200 w-[15px] h-[15px] md:w-5 md:h-5"/>
        </button>
    )
}