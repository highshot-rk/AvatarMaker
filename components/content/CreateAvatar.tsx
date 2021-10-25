import Image from 'next/image';
import bg1Image from "../../pages/assets/images/1bg.png";
import f12Image from "../../pages/assets/images/12.png";
import f14Image from "../../pages/assets/images/14.jpeg";
import f15Image from "../../pages/assets/images/15.jpeg";
import f16Image from "../../pages/assets/images/16.jpeg";
import f17Image from "../../pages/assets/images/17.jpeg";

// style={{backgroundImage: `url(${bg1Image})` }}
const CreateAvatar = () => {
  return (
    <div className="w-full flex">
        <div className="relative">
          <Image src={bg1Image} width={1763} height={849}/>
        </div>
        <div className="absolute w-1/4 sm:top-8 md:top-16 lg:top-24 xl:top-28 inset-x-1/11">
          <Image src={f12Image} width={400} height={215}/>
        </div>
        <div className="absolute w-1/3 sm:top-8 md:top-16 lg:top-24 xl:top-28 inset-x-2/5 grid grid-flow-row grid-cols-2 gap-0">
          <div>
            <Image src={f14Image}/>
          </div>
          <div>
            <Image src={f15Image}/>
          </div>
          <div className="-mt-1">
            <Image src={f16Image}/>
          </div>
          <div className="-mt-1">
            <Image src={f17Image}/>
          </div>
        </div>
    </div>
  )
}

export default CreateAvatar;