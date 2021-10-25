import Image from 'next/image'
import bg7Image from "../assets/images/7bg.png";
import p72Image from "../assets/images/72.png";
import p73Image from "../assets/images/73.png";

const Support = () => {
    return (
        <div className="w-full flex">
            <div className="relative">
                <Image src={bg7Image} width={1763} height={849}/>
            </div>
            <div className="absolute w-1/2 h-full inset-x-1/2 lg:pt-16 md:pt-4">
                <div className='w-full border-b-4 border-yellow-500 pb-6 pt-12 w-1/3 flex justify-start'>
                    <span className='md:text-lg xl:text-5xl font-bold text-blue-900'> SUPPORT </span>
                </div>
                
                <div className="flex justify-start">
                    <div className="flex flex-col">
                        <div  className="mt-10">
                            <button>
                                <div className="flex">
                                    <Image src={p72Image} width={100} height={75}></Image>
                                    <div className="flex flex-col ml-5">
                                        <div className="text-yellow-500 text-3xl font-bold flex justify-start">
                                            Discord
                                        </div>
                                        <div className="text-black text-lg  flex justify-start mt-3">
                                            https://discord.gg/NFTAvatarMaker
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div  className="mt-10 ml-2">
                            <button>
                                <div className="flex">
                                    <Image src={p73Image} width={90} height={75}></Image>
                                    <div className="flex flex-col ml-7">
                                        <div className="text-yellow-500 text-3xl font-bold flex justify-start">
                                            Twitter
                                        </div>
                                        <div className="text-black text-lg  flex justify-start mt-3">
                                            @Metaciple
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
  }
  
export default Support;