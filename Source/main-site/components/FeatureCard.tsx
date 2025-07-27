import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function FeatureCard({
  title,
  icon,
  text,
  color = "to-zinc-900",
}: {
  title: string;
  icon: React.ReactNode;
  text: string;
  color?: string;
}) {
  return (
    <Card
      className={`bg-gradient-to-br dark:from-background from-zinc-900 text-white ${color} hover:scale-[.99] transition-transform`}
    >
      <CardHeader>
        <CardTitle className="flex gap-x-4 items-center">
          {icon} {title}
        </CardTitle>
        <CardDescription>Boarded Feature</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{text}</p>
      </CardContent>
    </Card>
  );
}

export default FeatureCard;
