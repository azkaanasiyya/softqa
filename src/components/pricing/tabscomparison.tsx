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
          <TabsTrigger value="starter">
            <span>Starter</span>
            <span className="text-[18px] leading-7 text-grayscale-900">$29</span>
          </TabsTrigger>
          <TabsTrigger value="team">
            <span>Team</span>
            <span className="text-[18px] leading-7 text-grayscale-900">$99</span>
          </TabsTrigger>
          <TabsTrigger value="enterprise">
            <span>Enterprise</span>
            <span className="text-[18px] leading-7 text-grayscale-900">Custom</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="starter">
          <Card>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Users</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Test Scripts</span>
                <Image src="/pricing/sign.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Browser Support</span>
                <span className="text-[16px] leading-6 text-grayscale-900">Chrome</span>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Test Execution</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Reporting & Analytics</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Integrations</span>
                <Image src="/pricing/sign.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Security Features</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Support</span>
                <span className="text-[16px] leading-6 text-grayscale-900">Chat (24/7)</span>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Customization</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">AI Features</span>
                <Image src="/pricing/sign.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Training & Onboarding</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
            <CardFooter>
              <Button variant="login" size="medium" className="cursor-pointer text-primary-500 w-full mt-4 md:mt-6">Get Started</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Users</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Test Scripts</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Browser Support</span>
                <span className="text-[16px] leading-6 text-grayscale-900 text-end">Chrome, Firefox, Safari</span>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Test Execution</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Reporting & Analytics</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Integrations</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Security Features</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Support</span>
                <span className="text-[16px] leading-6 text-grayscale-900">Priority support</span>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Customization</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">AI Features</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Training & Onboarding</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
            <CardFooter>
              <Button variant="request" size="medium" className="cursor-pointer text-cyan-500 w-full mt-4 md:mt-6">Get Started</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="enterprise">
          <Card>
            <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Users</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Test Scripts</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Browser Support</span>
                <span className="text-[16px] leading-6 text-grayscale-900 text-end">All browsers + mobile testing</span>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Test Execution</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Reporting & Analytics</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Integrations</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Security Features</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Support</span>
                <span className="text-[16px] leading-6 text-grayscale-900">Priority support</span>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Customization</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">AI Features</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-row w-full justify-between py-4 md:py-5 px-2 border-b border-grayscale-100 items-center">
                <span className="text-[18px] leading-7 text-grayscale-900">Training & Onboarding</span>
                <Image src="/pricing/checklist.png" alt="check" width={20} height={20} className="w-[20px] h-[20px]"/>
              </div>
            <CardFooter>
              <Button variant="login" size="medium" className="cursor-pointer text-primary-500 w-full mt-4 md:mt-6">Get Started</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
