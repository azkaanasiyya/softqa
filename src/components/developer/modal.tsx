import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Play } from "lucide-react";

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
                        <Play className="text-primary-900 text-[20px] fill-primary-900 cursor-pointer"/>
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