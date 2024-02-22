import { Button } from "@material-tailwind/react";

export function ButtonNav({ title, variants, backgroundColor }) {
   return (
      <Button
         variant={variants}
         className={`${
            backgroundColor === true
               ? "bg-main-green text-white"
               : "bg-white text-main-green border-main-green"
         } shadow-none`}>
         {title}
      </Button>
   );
}
