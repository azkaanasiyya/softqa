export default function HomeUsers() {
    return (
        <div className="bg-[url('/home/bg-users.png')] bg-no-repeat bg-center bg-cover py-[132px] px-[124px] border-x">
            <div className="flex flex-col items-center gap-4">
                <p className="text-[88px] leading-[125%] font-normal text-center text-cyan-500">4,587,144+</p>
                <div className="flex flex-col gap-2 items-center justify-center max-w-[784px]">
                    <h4 className="text-[32px] font-normal leading-[40px] text-base-white">Unit tests written by Community Edition</h4>
                    <h6 className="text-[20px] leading-[36px] font-normal text-base-white opacity-[72%] text-center">SoftQA can write a complete and correct unit test every 2 seconds. Our AI are continuously being developed to achieve an efficient unit tests.</h6>
                </div>
            </div>
        </div>
    )
}