import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'

const Header = () => {
    return (
        <header className=' mx-6 mt-6 mb-[98px] flex items-center justify-between xl:mx-20 xl:mt-[65px] xl:mb-[86px]'>
            <img src={logo} alt="logo" className=' w-20 h-6 xl:w-[166px] xl:h-[49px]' />
            <nav>
                <ul className=' flex flex-row items-center gap-x-6 xl:gap-x-[58px]'>
                    <Link
                        to="features"
                    >
                        <li className=' font-["Raleway"] text-xs leading-[14px] text-primaryOne xl:text-base xl:leading-[19px]'>
                            Features
                        </li>
                    </Link>
                    <Link
                        to="team"
                    >
                        <li className=' font-["Raleway"] text-xs leading-[14px] text-primaryOne xl:text-base xl:leading-[19px]'>
                            Team
                        </li>
                    </Link>
                    <Link
                        to="register"
                    >
                        <li className=' font-["Raleway"] text-xs leading-[14px] text-primaryOne xl:text-base xl:leading-[19px]'>
                            Sign In
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;