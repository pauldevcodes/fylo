import { Link } from 'react-router-dom';

import illustrationTwo from '../images/illustration-2.svg'
import arrow from '../images/icon-arrow.svg'
import quotes from '../images/icon-quotes.svg'
import person from '../images/avatar-testimonial.jpg'

const Productive = () => {
    return (
        <div className=" bg-mobileCurve bg-no-repeat bg-cover bg-center px-5 pt-[93px] pb-[81px] flex flex-col gap-y-[87px] xl:bg-desktopCurve xl:px-20 xl:pt-[178px] xl:pb-[107px] xl:flex-row-reverse xl:items-center xl:gap-x-[90px]">
            <img src={illustrationTwo} alt="illustration of different people" className=' xl:w-[542px] xl:h-[409px] xl:basis-1/2' />
            <div className=' flex flex-col items-center xl:basis-1/2 xl:items-start'>
                <h2 className=' font-["Raleway"] font-bold text-center text-primaryOne mb-6 xl:text-[40px] leading-[47px] xl:mb-[38px] xl:text-start'>
                    Stay productive, wherever you are
                </h2>
                <p className=' font-["Open Sans"] text-sm leading-[21px] text-center text-primaryTwo mb-4 xl:text-base xl:leading-6 xl:text-start'>
                    Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
                </p>
                <p className=' font-["Open Sans"] text-sm leading-[21px] text-center text-primaryTwo mb-9 xl:text-base xl:leading-6 xl:mb-[15px] xl:text-start'>
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!
                </p>
                <Link
                    className=' font-["Open Sans"] text-xs text-accentTwo border-b border-b-accentTwo pb-[6px] flex items-center gap-x-2 mb-10 xl:text-base xl:leading-[22px] xl:mb-[50px]'
                >
                    See how Fylo works
                    <img src={arrow} alt="clickable arrow" />
                </Link>
                <div className=' bg-white pr-[13px] pl-[26px] py-[19px] rounded shadow flex flex-col gap-y-3 items-start xl:max-w-[356px] xl:pr-[34px] xl:pl-[33px] xl:py-[26px] xl:gap-y-4'>
                    <img src={quotes} alt="Quotes" />
                    <p className=' font-["Open Sans"] text-[10px] leading-[18px] tracking-[0.4px] text-primaryOne xl:text-[13px] xl:leading-[23px] xl:tracking-[1px]'>
                        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                    </p>
                    <div className=' flex flex-row items-center gap-x-[8px]'>
                        <img
                            src={person}
                            alt="person smiling"
                            className=' w-6 h-6 rounded-full xl:w-8 xl:h-8'
                        />
                        <div className=' flex flex-col gap-y-[2px]'>
                            <p className=' font-["Open Sans"] font-bold text-[9px] leading-3 tracking-[0.5px] text-primaryOne xl:text-[11px] xl:leading-[15px] xl:tracking-[1px]'>
                                Kyle Burton
                            </p>
                            <p className=' font-["Open Sans"] text-[6px] leading-3 tracking-[0.3px] text-primaryOne xl:text-[8px] xl:leading-[15px] xl:tracking-[0.4px]'>
                                Founder & CEO, Huddle
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productive;