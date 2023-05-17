import { Form } from "react-router-dom";

const CTA = () => {
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
                <input
                    type="email"
                    placeholder='email@example.com'
                    className=' font-["Raleway"] text-xs leading-[14px] tracking-[0.4px] text-neutralOne pt-[14px] pb-3 pl-[21px] w-full rounded-[3px]'
                />
                <button className=' font-["Raleway"] font-bold text-sm leading-4 text-white bg-accentOne py-3 rounded-[3px] w-full mt-2 xl:w-fit xl:py-4 xl:px-[22px] hover:opacity-90'>
                    Get Started For Free
                </button>
            </Form>
        </div>
    );
}

export default CTA;