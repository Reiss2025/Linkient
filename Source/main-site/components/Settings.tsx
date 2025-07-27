"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from "react";
import { Button } from "./ui/button";
import { Settings2Icon } from "lucide-react";
import { Switch } from "./ui/switch";
import { useTheme } from "@/context/ThemeContext";

function Settings() {
  const { currentTheme, switchTheme } = useTheme();

  const changeTheme = () => {
    if (currentTheme === "light") switchTheme("dark");
    else switchTheme("light");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          <Settings2Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-105">
        <DropdownMenuLabel>Page Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex gap-x-4 items-center justify-between">
          Dark Mode{" "}
          <Switch
            checked={currentTheme === "dark"}
            onCheckedChange={() => changeTheme()}
          />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Settings;
