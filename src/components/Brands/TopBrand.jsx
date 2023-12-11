

const TopBrand = () => {
    return (
        <div>
            <div className='mt-5 flex items-center justify-between
             bg-[#F3F3F3] px-16 py-6' >
                <div>Top Brands</div>
                <div className='border-b border-black'>View All brands</div>
            </div>



            <div className='bg-[#CDA792] grid grid-cols-12 pb-10'>


                <div className="col-span-4 flex flex-col gap-2 items-center mt-3" >
                    <div className="text-2xl font-medium">The Ordinary</div>
                    <div className='flex items-center gap-1'>
                        <img src='public/images/white-bottle.png' alt='product' />
                        <img src='public/icons/green-arrow.png' alt='arrow-key' className='w-7 h-7' />
                    </div>
                    <div className="text-xl font-bold text-white">upto 80 % off</div>
                </div>


                <div className="col-span-4 flex flex-col gap-2 items-center mt-3" >
                    <div className="text-2xl font-medium">The body Shop</div>
                    <div className='flex items-center gap-1'>
                        <img src='public/images/white-bottle.png' alt='product' />
                        <img src='public/icons/green-arrow.png' alt='arrow-key' className='w-7 h-7' />
                    </div>
                    <div className="text-xl font-bold text-white">All Items 20 % off</div>
                </div>


                <div className=" col-span-4 flex flex-col gap-2 items-center mt-3" >
                    <div className="text-2xl font-medium">Bath & Body Works</div>
                    <div className='flex items-center gap-1'>
                        <img src='public/images/white-bottle.png' alt='product' />
                        <img src='public/icons/green-arrow.png' alt='arrow-key' className='w-7 h-7' />
                    </div>
                    <div className="text-xl font-bold text-white">upto 50 % off</div>
                </div>


            </div>

        </div>
    )
}

export default TopBrand