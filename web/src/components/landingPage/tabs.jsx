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
         desc: "",
      },
      {
         label: "Listrik PLN",
         value: "listrikPln",
         desc: "",
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
