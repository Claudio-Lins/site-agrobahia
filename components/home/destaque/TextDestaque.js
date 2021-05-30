import Image from "next/image";

export default function TextDestaque() {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <Image src="/home/destaque/frame.svg" width={822} height={213} />
      </div>
      <div className="absolute leading-6 text-center w-2/3">
        <h1 className=" font-bold text-xl ">TextDestaque</h1>
        <span className="text-sm text-white ">Nossa missão é oferecer produtos de extrema qualidade, visando atender a demanda nacional e internacional e contribuir cada vez mais com a história do cacau e crescimento da região.</span>
      </div>
    </>
  );
}
