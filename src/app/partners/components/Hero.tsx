import Image from "next/image";

export default function Hero() {
  return (
    <div className=" flex text-white items-center bg-black justify-between">
      <div className="px-52">
        <h1 className="text-4xl font-bold">Socios del ecosistema Tekneo</h1>
        <p>
          Socios de alianza que complementan, integran o interoperan a tekneo
        </p>
      </div>
      <Image src="/img/partner.png" alt="" width={450} height={500} className="object-cover" />
    </div>
  );
}
