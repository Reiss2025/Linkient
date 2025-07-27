import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="text-white dark:text-primary rounded-md p-4 text-center content-center h-[400px] bg-gradient-to-bl from-zinc-300 to-zinc-600 hover:scale-[.99] transition-transform">
      <h1 className="font-black text-3xl flex items-center mx-auto justify-center gap-x-4">
        <Image
          src={"/Linkient Logo - No Background.png"}
          alt="logo"
          width={200}
          height={462}
        />
      </h1>
      <p>
        Your all-in-one platform for managing <i>your</i> development workflow.
      </p>
    </div>
  );
}

export default Hero;
