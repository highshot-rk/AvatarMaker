import Image from 'next/image';
import bg4Image from "../../pages/assets/images/4bg.jpeg";

const HowItWorks = () => {
    return (
      <div className="w-full flex -mt-2">
          <div className="relative">
            <Image src={bg4Image} width={1763} height={849}/>
          </div>
          <div className="absolute w-full">
            <div className="flex flex-col items-center lg:pt-28 md:pt-20">
              <div className="text-white text-2xl">
                HOW IT WORKS
              </div>
            </div>
            
          </div>
      </div>
    )
  }
  
export default HowItWorks;