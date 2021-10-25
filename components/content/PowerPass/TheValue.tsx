import Image from 'next/image';
import p7 from "../../../pages/assets/images/p-7.png";
import p12 from "../../../pages/assets/images/12.png";
import p9 from "../../../pages/assets/images/p-9.png";
const TheValue = () => {
  return (
    <div className='pt-10'>
      <div>
        <Image src={p7} alt='p7' width={326} height={226} />
      </div>
      <div className='font-bold text-5xl tracking-wider border-b-4 border-yellow-500 w-3/5 pb-4 flex justify-end -mt-8' >
        <span className='-mr-20 text-title'>THE VALUE OF A POWER-PASS.</span>
      </div>
      <div className='flex justify-between'>
        <div className='pt-20'>
          <Image src={p12} alt='p12' width={1200} height={700} />
        </div>
        <div className='px-20 text-title'>
          <div className='pt-6 text-xl'>
            <span className='text-3xl font-bold '>Unused</span><br/>
            An unused Power-Pass increases in value as we add more
            partners onto the Avatar Maker Platform. More Partners means
            more power-passes and traits. The more traits from different
            projects added to one avatar will make it more unique. E.G. If you had a Bored Ape Power-Pass and Cryptopunk Power-Pass
            you could build an avatar with Bored Ape and CryptoPunk traits.
          </div>
          <div className='pt-6 text-xl'>
            <span className='text-3xl font-bold'>Burned</span><br/>
            Once a Power-Pass is fully used the NFT burns.
          </div>
        </div>
        <div className='-mt-32'>
          <Image src={p9} alt='p9' width={450} height={1700} />
        </div>
      </div>
      
    </div>
  )
}

export default TheValue;