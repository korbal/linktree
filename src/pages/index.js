import Image from "next/image";
import data from "../../data/data.json";

export default function Home() {
  return (
    <div className="flex mx-auto w-full justify-center mt-16">
      <Image
        alt={data.name}
        src={data.avatar}
        width={80}
        height={80}
        className="rounded-full"
      />
      <h1 className="font-semibold">{data.name}</h1>
    </div>
  );
}
