import Image from "next/image";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export function Modal() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button
                        variant="developer"
                        size="developer"
                        className="cursor-pointer"
                        >
                        <Image src="/developer/play.png" alt="play" width={20} height={20}/>
                    </Button>
                </DialogTrigger>
                <DialogContent className="w-[80vw] h-[80vh] aspect-video object-cover rounded-[20px]">
                    <video
                        autoPlay
                        muted
                        className="w-[80vw] h-[80vh] aspect-video object-cover rounded-[20px]"
                    >
                        <source src="/developer/modal.mp4" type="video/mp4"/>
                        <source src="/developer/modal.webm" type="video/webm"/>
                    </video>
                </DialogContent>
            </form>
        </Dialog>
    )
}