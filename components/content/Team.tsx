import Image from 'next/image'
import p61Image from "../assets/images/61.png";
import p62Image from "../assets/images/62.png";
import p63Image from "../assets/images/63.jpg";
import p64Image from "../assets/images/64.png";
import p65Image from "../assets/images/65.png";
import p66Image from "../assets/images/66.png";
import p67Image from "../assets/images/67.png";
import p68Image from "../assets/images/68.png";
import p69Image from "../assets/images/69.png";

const Team = () => {
    return (
      <div>
          <div className='border-b-4 border-yellow-500 pb-2 pt-12 w-1/3 flex justify-start pl-16'>
            <span className='md:text-lg xl:text-5xl font-bold text-title'> TEAM </span>
          </div>
          <div className='flex justify-center items-center pt-10 pb-20 gap-14'>
            <div>
              <Image src={p61Image} width={208} height={250}/>
              <div className='bg-black w-52 p-1 text-white text-sm flex font-bold justify-center items-center text-center team_shadow'>
                SHAPESHIFTER333<br/>
                (OPERATIONS)
              </div>
            </div>
            <div>
              <Image src={p62Image} width={208} height={250}/>
              <div className='bg-black w-52 p-1 text-white flex text-sm font-bold justify-center items-center text-center team_shadow'>
                ADDIS"RAPTILE"MUSSA<br/>
                (MUSIC)
              </div>
            </div>
            <div>
              <Image src={p63Image} width={208} height={250}/>
              <div className='bg-black w-52 p-1 text-white flex text-xs font-bold justify-center items-center text-center team_shadow'>
                MASTERBUZ<br/>
                (KELVIN TROY)<br/>
                (MASTERMIND)
              </div>
            </div>
            <div>
              <Image src={p64Image} width={208} height={250}/>
              <div className='bg-black w-52 p-1 text-white flex text-sm font-bold justify-center items-center text-center team_shadow'>
                LULU<br/>
                (COMMUNITY MANAGMENT)
              </div>
            </div>
            <div>
              <Image src={p65Image} width={208} height={250}/>
              <div className='bg-black w-52 p-1 text-white flex text-sm font-bold justify-center items-center text-center team_shadow'>
                UNDEAD WIZARD<br/>
                (ART DEPARTMENT)
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center pt-10 pb-20 gap-14'>
            <div>
              <Image src={p66Image} width={208} height={250}/>
              <div className='bg-black w-52 p-1 text-white flex text-sm font-bold justify-center items-center text-center team_shadow'>
                SYNN<br/>
                (IT)
              </div>
            </div>
            <div>
              <Image src={p67Image} width={208} height={250}/>
              <div className='bg-black w-52 p-1 text-white flex text-sm font-bold justify-center items-center text-center team_shadow'>
                ELEVEN<br/>
                (IT)
              </div>
            </div>
            <div>
              <Image src={p68Image} width={208} height={250}/>
              <div className='bg-black w-52 p-1 text-white flex text-sm font-bold justify-center items-center text-center team_shadow'>
                CARLREED<br/>
                (ENTERTAINMENT)
              </div>
            </div>
            <div>
              <Image src={p69Image} width={208} height={250}/>
              <div className='bg-black w-52 p-1 text-white flex text-sm font-bold justify-center items-center text-center team_shadow'>
                NFTBOOMER<br/>
                (METAVERSE)
              </div>
            </div>
          </div>
      </div>
    )
  }
  
export default Team;