import Image from 'next/image'
import bg2Image from "../assets/images/2bg.png"

const WhatIsAvatar = () => {
    return (
      <div className="w-full flex -mt-2">
          <div className="relative">
            <Image src={bg2Image} width={1763} height={800}/>
          </div>
          <div className="absolute w-1/2 h-full inset-x-1/2 lg:py-10 md:py-2">
            <div className="border-b-4 border-yellow-500 pb-4">
              <span className=" xl:text-5xl font-bold md:text-lg text-blue-900 tracking-widest">WHAT IS THE NFT<br/>AVATAR MAKER</span>
            </div>
            <div className="lg:mt-7 md:mt-2 w-full pr-10 font-bold 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs md:leading-none lg:leading-none xl:leading-tight 2xl:leading-tight text-title">
              The NFT Avatar Maker is the "be all and end all" Avatar Tool.<br/><br/>
              With billions of combinations and over 1200 characteristics at launch, our NFT avatar maker
              will allow users to build their avatars from an ever-growing list of character traits.<br/><br/>
              Samurai Masks, Superhero cowls, Golden skin and much more are just a few examples of the
              characteristic you'll find at launch.<br/><br/>
              More traits and characteristics will unlock with collaborations and depending upon the NFTs
              users hold in their wallets.<br/><br/>
              Our goal is to enhance the utility of the best and most popular communities under one roof
              and allow NFT holders to get more functionality out of the awesome NFTs they already hold.<br/><br/>
              The exact combination of traits and colors users choose to build their Avatar with CAN
              NEVER BE USED AGAIN, making every Avatar a one-of-a-kind.
            </div>
          </div>
      </div>
    )
  }
  
export default WhatIsAvatar;