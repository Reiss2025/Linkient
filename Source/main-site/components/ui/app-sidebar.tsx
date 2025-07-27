import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { User2Icon, UserX2Icon } from "lucide-react";
import Image from "next/image";

export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <span className="max-h-[100px] overflow-hidden relative">
            <Image
          src={"/Linkient Logo - No Background.png"}
          alt="Logo"
          className="max-w-[200px] max-h-[200px] mx-auto relative -top-1/2"
          width={1024}
          height={1024}
        />
        </span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <h1 className="font-bold">Group Header</h1>
          <SidebarGroupContent>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="border rounded-md py-3 bg-background">
          <span className="flex justify-evenly items-center">
            <UserX2Icon />
            <UserX2Icon />
            <UserX2Icon />
            <UserX2Icon />
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
