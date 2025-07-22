import { Button } from "@/components/ui/button"
import {
  Card,
  CardFooter,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image";

export function TabsComparison() {
  return (
    <div className="flex w-full flex-col">
      <Tabs defaultValue="starter">
        <TabsList>
          <TabsTrigger value="starter">Starter</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
        </TabsList>
        <TabsContent value="starter">
          <Card>
              <div className="flex flex-row w-full justify-between items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Users</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
            <CardFooter>
              <Button variant="login" size="medium" className="cursor-pointer text-primary-500 w-full">Get Started</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <div className="flex flex-row w-full justify-between items-center py-5">
                <span className="text-[18px] leading-7 text-grayscale-900">Users</span>
                <div className="bg-grayscale-50 border-b border-l border-grayscale-100 h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                    <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                </div>
              </div>
            <CardFooter>
              <Button variant="request" size="medium" className="cursor-pointer text-cyan-500 w-[230.33px]">Get Started</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="enterprise">
          <Card>
            <div className="flex flex-row w-full justify-between items-center py-5">
                <span className="text-[18px] leading-7 text-grayscale-900">Users</span>
                <div className="bg-grayscale-50  h-[72px] py-6 px-7 flex flex-col justify-center items-center">
                    <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
                </div>
              </div>
            <CardFooter>
              <Button variant="login" size="medium" className="cursor-pointer text-primary-500 w-[230.33px]">Get Started</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
