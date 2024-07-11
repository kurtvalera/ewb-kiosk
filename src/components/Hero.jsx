import Logo from '../logos/Logo';
import ChevronDown from '../logos/ChevronDown';

const Hero = () => {
    return (
        <div className='hero h-screen w-screen flex justify-center items-center'>
            <div className='hero-contents flex flex-col w-full gap-[50px]'>
                <div className='flex-col hero-contents-1 hero-logo flex justify-center items-center'>
                    <Logo />
                    <div className='pt-4 flex flex-col text-white gap-8 text-center'>
                    <div className='text-4xl md:text-5xl lg:text-6xl'>eastwest</div>
                    <div className='text-[40px] md:text-4xl lg:text-5xl'>Customer Application</div>
                </div>
                </div>
                
                <div className='hero-contents-2 rounded border-black border-[1px] blur-background mx-16'>
                    <div className='flex flex-col justify-center items-center p-8 gap-4'>
                        <div className='text-white text-center'>
                        <div className='flex flex-row items-center justify-center text-[40px]'>
                            <p className=''>
                                Start <span className='ew-yellow'>focusing</span> on your <span className='ew-yellow'>dreams</span> now
                            </p>
                        </div>

                        </div>
                        <div>
                            <ChevronDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
