import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col h-[700px]">
      <form className="container flex flex-col border max-w-[700px] h-[550px] m-auto bg-background rounded-md shadow-md p-4">
        <Image src='/Linkient Logo - No Background.png' width={200} height={200} alt="logo" className="mx-auto" />
        <span className="h-full w-full my-auto flex flex-col justify-center gap-y-12">
          <span className="mt-auto flex flex-col gap-y-12">
            <span className="flex flex-col gap-y-3">
              <Label htmlFor="email">Email:</Label>
              <Input type="email" name="email"></Input>
            </span>
            <span className="flex flex-col gap-y-3">
              <Label htmlFor="password">Password:</Label>
              <Input type="password" name="password"></Input>
            </span>
          </span>
          <span className="flex flex-col gap-y-3 mt-auto">
            <Button variant={"outline"}>
              Login <LogInIcon />
            </Button>
          </span>
        </span>
      </form>
    </div>
  );
};

export default LoginPage;
