const TopBrand = () => {
    return (
        <div>
            <div className='mt-5 flex items-center justify-between
             bg-[#F3F3F3] lg:px-16 lg:py-6 p-4' >
                <div className="font-sree font-normal lg:text-3xl text-lg">Top Brands</div>
                <div className='border-b border-black font-sree font-normal lg:text-xl text-sm'>View All brands</div>
            </div>

            <div className='bg-[#CDA792] grid grid-cols-12 pb-10'>

                <div className="col-span-4 flex flex-col gap-2 items-center mt-4" >
                    <div className="text-2xl font-medium font-sree">The Ordinary</div>
                    <div className='flex items-center gap-1'>
                        <img src='/images/white-bottle.png' alt='product' />
                        <img src='/icons/green-arrow.png' alt='arrow-key' className='w-7 h-7' />
                    </div>
                    <div className="text-xl font-bold text-white font-abhaya">upto 80 % off</div>
                </div>

                <div className="col-span-4 flex flex-col gap-2 items-center mt-4" >
                    <div className="text-2xl font-medium font-sree">The body Shop</div>
                    <div className='flex items-center gap-1'>
                        <img src='/images/red-bottle.png' alt='product' />
                        <img src='/icons/green-arrow.png' alt='arrow-key' className='w-7 h-7' />
                    </div>
                    <div className="text-xl font-bold text-white font-abhaya">All Items 20 % off</div>
                </div>

                <div className=" col-span-4 flex flex-col gap-2 items-center mt-4" >
                    <div className="text-2xl font-medium font-sree">Bath & Body Works</div>
                    <div className='flex items-center gap-1'>
                        <img src='/images/tube-bottle.png' alt='product' />
                        <img src='/icons/green-arrow.png' alt='arrow-key' className='w-7 h-7' />
                    </div>
                    <div className="text-xl font-bold text-white font-abhaya">upto 50 % off</div>
                </div>

            </div>
        </div>
    )
}

export default TopBrand