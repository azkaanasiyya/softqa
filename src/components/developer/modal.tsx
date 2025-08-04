"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function Modal() {
    const [isLoading, setIsLoading] = useState(false);

    const handleOpenDialog = () => {
        setIsLoading(true);
    };

    const handleVideoLoaded = () => {
        setIsLoading(false);
    };

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button
                        variant="developer"
                        size="developer"
                        className="cursor-pointer"
                        onClick={handleOpenDialog}
                    >
                        <Image src="/developer/play.png" alt="play" width={20} height={20}/>
                    </Button>
                </DialogTrigger>
                <DialogContent className="w-[80vw] h-[80vh] aspect-video object-cover rounded-[20px]">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center rounded-[20px] justify-center bg-white z-10">
                            <Loader2 className="h-10 w-10 animate-spin text-black text-opacity-75" />
                        </div>
                    )}
                    <video
                        autoPlay
                        muted
                        className={`w-full h-full object-cover rounded-[20px] ${isLoading ? 'hidden' : ''}`} 
                        onLoadedData={handleVideoLoaded} 
                    >
                        <source src="/developer/modal.mp4" type="video/mp4"/>
                        <source src="/developer/modal.webm" type="video/webm"/>
                    </video>
                </DialogContent>
            </form>
        </Dialog>
    );
}