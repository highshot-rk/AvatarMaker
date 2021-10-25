import Image from 'next/image';
import p1 from "../../../pages/assets/images/p-1.png";
import p2 from "../../../pages/assets/images/p-2.png";
const HowItWorks = () => {
    return (
        <div className='flex'>
            <div>
                <div>
                    <Image src={p1} alt='p1' width={1440} height={1440} />
                </div>
                <div>
                    <Image src={p2} alt='p2' width={240} height={160} />
                </div>
            </div>
            <div className='pl-20 text-title'>
                <div className='font-bold text-5xl pb-6 pt-20 border-b-4 border-yellow-500'>
                    THE POWER-PASS:<br />
                    HOW IT WORKS
                </div>
                <div className='font-bold text-2xl text-gray-900 pt-8 pr-32 tracking-wider text-title'>
                    Users can create Avatars from 1200 traits available from the avatar maker at launch.<br/><br/>
                    However, Power-Passes provide more than just 1200 traits. A pass will be available to specific NFT holders to get VIP traits.<br /><br/>
                    For example: If you hold a KIA NFT you will be able to purchase and
                    own a limited edition KIA Power-Pass that will provide exclusive
                    traits in the Avatar Maker.
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;