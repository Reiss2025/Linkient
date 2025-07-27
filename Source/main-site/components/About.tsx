import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { TwemojiRedHeart } from "./logos/Icons";

const About = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          <InfoIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>About Linkient</DialogTitle>
          <DialogDescription>
            Useful and Helpful information about Linkient.
          </DialogDescription>
        </DialogHeader>
        <h1 className="font-semibold">What is Linkient?</h1>
        <p className="text-sm">
          Linkient is a client management solution which provides developers
          with a centeralised location to better manage their clients.
        </p>
        <h1 className="font-semibold">How do I install Linkient?</h1>
        <p className="text-sm">
          Before downloading check out our docs to get familiarised with the
          installation process and deployment phase.
        </p>
        <h1 className="font-semibold">Why did we make Linkient?</h1>
        <p className="text-sm">
          There are a copious amount of services/tools/platforms a developer may
          use in their lifetime, we aim to provide all of these in one,
          easy-to-install, self-hosted environment.
        </p>
        <DialogFooter>
          <p className="mx-auto flex gap-x-2 mb-2 items-center">
            Made with
            <TwemojiRedHeart className="hover:cursor-pointer hover:animate-spin" />
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default About;
