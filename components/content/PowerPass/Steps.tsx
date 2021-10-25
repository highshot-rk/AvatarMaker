import Image from 'next/image';
import p32 from "../../../pages/assets/images/32.png";
import p4 from "../../../pages/assets/images/p-4.png";
import p5 from "../../../pages/assets/images/p-5.png";
import p6 from "../../../pages/assets/images/p-6.png";
import p37 from "../../../pages/assets/images/37.jpeg";
import p38 from "../../../pages/assets/images/38.png";
import p39 from "../../../pages/assets/images/39.jpeg";
const Steps = () => {
    return (
        <div>
            <div className='border-b-4 border-yellow-500 w-1/2 pt-14 pb-6 flex justify-center'>
                <span className='font-bold text-5xl tracking-wider text-title'>POWER-PASS STEPS</span>
            </div>
            <div className='grid grid-cols-3 gap-4 pt-8'>
                <div className='pl-10'>
                    <div className='grid grid-cols-5'>
                        <div className='col-span-4'>
                            <Image src={p32} alt='p32' width={350} height={350} />
                        </div>
                        <div className='flex items-center mx-2'>
                            <Image src={p4} alt='p4' width={105} height={105} />
                        </div>
                    </div>
                    <div className='font-bold text-gray-800'>
                        <div className='grid grid-cols-5'>
                            <div className='col-span-4'>
                                OWN AN NFT FROM ONE OF OUR
                                PARTNERS TO GAIN ACCESS TO
                                A COMPATIBLE POWER-PASS
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex'>
                        <Image src={p5} alt='p5' width={540} height={320} />
                    </div>
                    <div className='font-bold text-gray-800 pt-10 px-16'>
                        A POWER-PASS WILL GIVE USERS THE ABILITY TO
                        MAKE AND DESIGN 3 ONE-OF-A-KIND AVATARS; 1
                        FOR FREE AND 2 FOR THE COST OF 0.03
                        POWER-PASS TRAITS WILL HAVE CHARACTERISTICS
                        INSPIRED BY THE COMPATIBLE NFT.
                    </div>
                </div>
                <div>
                    <div className='flex items-center -mt-16 justify-around'>
                        <div>
                            <Image src={p6} alt='p6' width={133} height={75} />
                        </div>
                        <div>
                            <div>
                                <Image src={p37} alt='p37' width={160} height={160} />
                            </div>
                            <div>
                                <Image src={p38} alt='p38' width={160} height={160} />
                            </div>
                            <div>
                                <Image src={p39} alt='p39' width={160} height={160} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;