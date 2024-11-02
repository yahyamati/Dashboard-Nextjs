"use client";

import { BellIcon } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { fallbackModeToStaticPathsResult } from "next/dist/lib/fallback";

export default function Header() {
    const [notifications , stNotifications] = useState<any>([
        {
            text:"This is a notification ",
            date:"02-11-2024",
            read:true
        },
        {
            text:"This is another notification ",
            date:"02-11-2024",
            read:false
        }
]);

  return (
 
    <div className=" grid grid-cols-2 gap-4 p-4 border-b">
      <CommandDemo />

      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
          <Button className="relative" variant="outline" size="icon">
                <div className={`absolute -top-2 -right-1  h-3 w-3 rounded-full my-1 ${notifications.find((x:any)=>
                x.read===false) ? 'bg-red-500' :'bg-green-500'}`}></div>
            <BellIcon className="h-4 w-4" />
        </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item:any , key:number)=> <DropdownMenuItem key={key} 
            className="p-2 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
                <div className={` h-3 w-3 rounded-full my-1 ${item.read ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <div><p>{item.text}</p> 
                <p className="text-xs text-neutral-500">{item.date}</p>
                {/* <p>{item.read ? 'Read' : 'Unread'}</p> */}
                </div>
                
            </DropdownMenuItem>  
            )}
            
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
