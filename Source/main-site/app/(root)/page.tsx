import Image from "next/image";

export default function Home() {
  return (
    <div className="py-4 animation-duration-[5s] fade-in animate-in">
      <h1 className="text-center text-4xl font-black pt-8">Coming Soon</h1>
      <Image src='/Linkient Logo - No Background.png' alt="logo" width={400} height={400} className="mx-auto"/>
      <p className="text-center pb-8">Register now to be added to the mailing list and recieve updated about Linkient!</p>
    </div>
  );
}
