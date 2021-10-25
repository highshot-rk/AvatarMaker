import Image from 'next/image'
import p32Image from "../../pages/assets/images/32.png";
import p51Image from "../../pages/assets/images/51.png";
import p56Image from "../../pages/assets/images/56.png";
import p52Image from "../../pages/assets/images/52.png";
import p53Image from "../../pages/assets/images/53.png";
import p54Image from "../../pages/assets/images/54.png";
import p57Image from "../../pages/assets/images/57.jpg";
import pABImage from "../../pages/assets/images/AB.png";

const InComing = () => {
    return (
      <div className="bg-incoming -mt-2">
        <div className='border-b-4 border-yellow-500 pb-2 pt-12 w-1/2 flex justify-end'>
          <span className='md:text-xl xl:text-5xl font-bold text-title'> INCOMING POWER-PASSES </span>
        </div>
        <div className='flex justify-around items-center pt-10 pb-20'>
          <Image src={p32Image} width={200} height={200}/>
          <Image src={p51Image} width={200} height={200}/>
          <Image src={p52Image} width={200} height={200}/>
          <Image src={p53Image} width={200} height={200}/>
        </div>
        <div className='flex justify-evenly pb-10 items-center'>
          <div>
            <Image src={p54Image}   width={280} height={180}/>
          </div>
          <div className="flex flex-col items-center -mt-10">
            <div>
              <Image src={pABImage}   width={500} height={120}/>
            </div>
            <div>
              <Image src={p56Image}   width={300} height={60}/>
            </div>
          </div>
          <div>
            <Image src={p57Image}  width={280} height={100}/>
          </div>
        </div>
      </div>
    )
  }
  
export default InComing;