import Image from 'next/image'
import bg3Image from "../assets/images/3bg.png";
import p32Iamge from "../assets/images/32.png";
import p34Image from "../assets/images/34.png";
import f12Image from "../assets/images/12.png";
import p35Image from "../assets/images/35.png";
import p37Image from "../assets/images/37.jpeg";
import p38Image from "../assets/images/38.png";

const PowerUp = () => {
    return (
      <div className="w-full flex -mt-1.5">
          <div className="relative">
            <Image src={bg3Image} width={1763} height={849}/>
          </div>
          <div className="flex absolute w-4/5 inset-x-0 lg:py-40 md:pb-24 mt-12 items-center ">
            <div>
              <div className="border-b-4 border-yellow-500 pb-4 flex justify-end w-5/6">
                <span className="xl:text-5xl font-bold md:text-lg text-title -mr-20">POWER UP YOUR FAVORITE NFTs</span>
              </div>
              <div className="flex justify-start items-center lg:mt-7 md:mt-2 pl-44 gap-1">
                <div>
                  <Image src={p32Iamge} width={195} height={200}/>
                </div>
                <div className="pl-10">
                  <Image src={p34Image} width={100} height={100}/>
                </div>
                <div className="pl-10">
                  <Image src={f12Image} width={245} height={130}/>
                </div>
                <div className="pl-10">
                  <Image src={p35Image} width={135} height={75}/>
                </div>
              </div>
            </div>
            <div className="pl-10">
              <div>
                <Image src={p37Image} width={190} height={190}/>
              </div>
              <div>
                <Image src={p38Image} width={190} height={190}/>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
export default PowerUp;