

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
 return(
  <div>
    home page
    <Button variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </Button>
  </div>
 )
 
}
