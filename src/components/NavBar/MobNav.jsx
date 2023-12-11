
const MobNav = ({ isOpen }) => {

    return (
        <div className="px-6 pt-4 inset-0 fixed bg-[#8EB226] w-full z-[999]">

            <div className="flex gap-2  items-center" onClick={() => isOpen(false)} >
                <img src='/images/logo.png' alt='logo' className='w-7 h-7' />
                <img src='/images/title-logo.png' alt='logo-title'
                    className='w-24' />
            </div>

            <div className="mt-10 flex flex-col gap-5
            font-medium  text-white font-inter text-base">
                <div onClick={() => isOpen(false)}>Shop</div>
                <div onClick={() => isOpen(false)}>Product</div>
                <div onClick={() => isOpen(false)}>Contact</div>
                <div onClick={() => isOpen(false)}>Sale</div>
            </div>

        </div>
    )
}

export default MobNav