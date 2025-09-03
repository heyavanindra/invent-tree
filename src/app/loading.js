import Image from "next/image"


const Loading = () => {
  return (
    <div className="bg-white h-screen w-full flex justify-center items-center">
        <Image src={'/logo3.webp'} width={500} height={500} alt="logo"></Image>
    </div>
  )
}

export default Loading