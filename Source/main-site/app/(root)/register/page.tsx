import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex py-6 flex-col min-h-[700px] h-auto">
      <form className="container flex flex-col border max-w-[700px] my-auto m-auto bg-background rounded-md shadow-md p-4">
        <Image src='/Linkient Logo - No Background.png' width={200} height={200} alt="logo" className="mx-auto" />
        <span className="h-auto w-full my-auto flex flex-col justify-center gap-y-6">
          <span className="flex gap-3">
            <span className="flex w-1/2 flex-col gap-y-3">
              <Label htmlFor="fnm">Firstname:</Label>
              <Input name="fnm" type="text"></Input>
              {/* <p className="text-red-500 text-sm" id="fnmerr">Invalid Firstname</p> */}
            </span>
            <span className="flex w-1/2 flex-col gap-y-3">
              <Label htmlFor="lnm">Lastname:</Label>
              <Input name="lnm" type="text"></Input>
              {/* <p className="text-red-500 text-sm" id="lnmerr">Invalid Lastname</p> */}
            </span>
          </span>
          <span className="flex flex-col gap-y-3">
            <Label htmlFor="email">Email:</Label>
            <Input name="email" type="email"></Input>
            {/* <p className="text-red-500 text-sm" id="emlerr">Invalid Email</p> */}
          </span>
          <span className="flex flex-col gap-y-2">
            <span className="flex gap-x-3">
              <span className="flex w-1/2 flex-col gap-y-3">
                <Label htmlFor="passwd">Password:</Label>
                <Input name="passwd" type="password"></Input>
              </span>
              <span className="flex w-1/2 flex-col gap-y-3">
                <Label htmlFor="cnfrmpasswd">Confirm Password:</Label>
                <Input name="cnfrmpasswd" type="password"></Input>
              </span>
            </span>
            <span className="text-muted-foreground text-xs">
            <p>Your password must:</p>
            <span className="w-full grid grid-cols-1 md:grid-cols-2">
              <li className="list-disc" id="pwdlen">Contain at least 8 characters.</li>
              <li className="list-disc" id="pwdspc">Contain at least 1 special character. </li>
              <li className="list-disc" id="pwdnmb">Contain at least 1 number.</li>
              <li className="list-disc" id="pwdcap">Contain at least 1 capital letter.</li>
            </span>
          </span>
          </span>
          <span className="flex flex-col gap-y-3">
            <Button variant={"outline"}>
              Register Account <UserPlus2Icon />
            </Button>
          </span>
        </span>
      </form>
    </div>
  );
};

export default RegisterPage;
