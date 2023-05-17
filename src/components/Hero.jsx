import { Form } from 'react-router-dom';
import illustrationOne from '../images/illustration-1.svg'

const Hero = () => {
    return (
        <div className=" mx-7 mb-[90px] flex flex-col gap-y-10 xl:mx-20 xl:mb-[164px] xl:flex-row-reverse xl:items-center xl:gap-x-[55px]">
            <img src={illustrationOne} alt="an illustration of people arranging files" className=' xl:w-[640px] xl:basis-1/2' />
            <div className=' xl:basis-1/2'>
                <h1 className=' font-["Open Sans"] font-bold text-2xl leading-9 text-center text-primaryOne xl:text-[40px] xl:leading-[60px] xl:text-start'>
                    All your files in one secure location, accessible anywhere.
                </h1>
                <p className=' font-["Open Sans"] text-sm leading-[21px] text-center text-primaryOne mt-6 mb-8 xl:text-[17px] xl:leading-6 xl:text-start xl:tracking-[1px]'>
                    Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.
                </p>
                <Form
                className=' flex flex-col gap-y-4 xl:flex-row xl:gap-x-4'
                >
                    <input
                        type="email"
                        placeholder='Enter your email..'
                        className=' font-["Raleway"] text-xs leading-[14px] tracking-[0.4px] text-neutralTwo pt-[14px] pb-3 pl-[21px] w-full rounded-[3px] xl:leading-[19px]'
                    />
                    <button className=' font-["Raleway"] font-bold text-sm leading-4 text-white bg-accentOne py-3 rounded-[3px] w-full hover:opacity-90'>
                        Get Started
                    </button>
                </Form>
            </div>
        </div>
    );
}

export default Hero;