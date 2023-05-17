// assest
import logo from '../images/logoTwo.svg'
import email from '../images/icon-email.svg'
import phone from '../images/icon-phone.svg'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'

// react router dom
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" bg-primaryOne px-[39px] pt-[65px] pb-[42px] flex flex-col gap-y-8 xl:px-20 xl:pt-[92px] xl:pb-[86px]">
            <img src={logo} alt="logo" className=' w-[105px] h-[30px] xl:w-[135px] xl:h-[39px]' />
            <div className=' flex flex-col gap-y-8 xl:flex-row xl:items-start xl:justify-between'>
                <div className=' flex flex-col items-start gap-y-4'>
                    <div className=' flex flex-row items-center gap-x-4'>
                        <img src={phone} alt="phone" className=' w-6 h-6' />
                        <p className=' font-["Open Sans"] text-base text-white'>
                            Phone: +1-543-123-4567
                        </p>
                    </div>
                    <div className=' flex flex-row items-center gap-x-4'>
                        <img src={email} alt="phone" className=' w-6 h-6' />
                        <p className=' font-["Open Sans"] text-base text-white'>
                            example@fylo.com
                        </p>
                    </div>
                </div>

                <ul className=' flex flex-col items-start gap-y-4'>
                    <li className=' font-["Open Sans"] text-base leading-[22px] text-white'>
                        <Link to="about" className=' hover:text-primaryTwo'>About Us</Link>
                    </li>
                    <li className=' font-["Open Sans"] text-base leading-[22px] text-white'>
                        <Link to="jobs" className=' hover:text-primaryTwo'>Jobs</Link>
                    </li>
                    <li className=' font-["Open Sans"] text-base leading-[22px] text-white'>
                        <Link to="press" className=' hover:text-primaryTwo'>Press</Link>
                    </li>
                    <li className=' font-["Open Sans"] text-base leading-[22px] text-white'>
                        <Link to="blog" className=' hover:text-primaryTwo'>Blog</Link>
                    </li>
                </ul>

                <ul className=' flex flex-col items-start gap-y-4'>
                    <li className=' font-["Open Sans"] text-base leading-[22px] text-white'>
                        <Link to="contact" className=' hover:text-primaryTwo'>Contact Us</Link>
                    </li>
                    <li className=' font-["Open Sans"] text-base leading-[22px] text-white'>
                        <Link to="terms" className=' hover:text-primaryTwo'>Terms</Link>
                    </li>
                    <li className=' font-["Open Sans"] text-base leading-[22px] text-white'>
                        <Link to="privacy" className=' hover:text-primaryTwo'>Privacy</Link>
                    </li>
                </ul>

                <div className=' flex flex-row gap-x-[10px] justify-center'>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                </div>
            </div>
            <p className=' text-white text-center'>
                Challenge by <a className=' opacity-50' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a className=' opacity-50' href="https://twitter.com/pauldevcodes">Paul Okwulu</a>.
            </p>
        </footer>
    );
}

export default Footer;