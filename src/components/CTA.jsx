import { Form } from "react-router-dom";
import { useState } from 'react';

const CTA = () => {

    const [email, setEmail] = useState("")
    const [valid, setValid] = useState(true)

    const validateEmail = (e) => {
        const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        // console.log(regex.test(email))
        if (regex.test(email)) {
            setEmail("")
            setValid(true)
            return true
        } else {
            setValid(!valid)
            return false
        }
    }

    return (
        <div className=" bg-primaryTwo px-12 pt-[54px] pb-[71px] flex flex-col items-center gap-y-6 xl:px-20 xl:pt-[100px] xl:pb-[133px] xl:flex-row xl:gap-x-[227px]">
            <div className=" flex flex-col items-center gap-y-4 xl:basis-1/2 xl:items-start xl:gap-y-[17px]">
                <h3 className=" font-['Raleway'] font-bold text-lg leading-6 text-white xl:text-[32px] xl:leading-[48px]">
                    Get early access today
                </h3>
                <p className=" font-['Open Sans'] text-sm leading-[21px] text-center text-white xl:text-base xl:tracking-[1px] xl:text-start">
                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
                </p>
            </div>
            <Form className=" xl:basis-1/2">
                <div className=" w-full">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='email@example.com'
                        className=' font-["Raleway"] text-xs leading-[14px] tracking-[0.4px] text-neutralOne pt-[14px] pb-3 pl-[21px] w-full rounded-[3px]'
                    />
                    {valid ? "" : <p className=' text-sm text-center text-white'>Please check your email</p>}
                </div>
                <button
                    onClick={validateEmail}
                    className=' font-["Raleway"] font-bold text-sm leading-4 text-white bg-accentOne py-3 rounded-[3px] w-full mt-2 xl:w-fit xl:py-4 xl:px-[22px] hover:opacity-9z0'
                >
                    Get Started For Free
                </button>
            </Form>
        </div>
    );
}

export default CTA;