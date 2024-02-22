import {
   Tab,
   TabPanel,
   Tabs,
   TabsBody,
   TabsHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { TopUpInput } from "./topUpInput";

export function TabsHome() {
   const [activeTab, setActiveTab] = useState("pulsa");
   const data = [
      {
         label: "Pulsa",
         value: "pulsa",
         desc: <TopUpInput />,
      },
      {
         label: "Paket Data",
         value: "paketData",
         desc: <TopUpInput />,
      },
      {
         label: "Flight",
         value: "flight",
         desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
      },
      {
         label: "Listrik PLN",
         value: "listrikPln",
         desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
      },
   ];
   return (
      <Tabs value={activeTab}>
         <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
               className:
                  "bg-transparent border-b-[3px] border-main-green shadow-none rounded-none",
            }}>
            {data.map(({ label, value }) => (
               <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={
                     activeTab === value
                        ? "text-main-green font-bold"
                        : "font-bold text-gray-600"
                  }>
                  {label}
               </Tab>
            ))}
         </TabsHeader>
         <TabsBody>
            {data.map(({ value, desc }) => (
               <TabPanel key={value} value={value}>
                  {desc}
               </TabPanel>
            ))}
         </TabsBody>
      </Tabs>
   );
}
