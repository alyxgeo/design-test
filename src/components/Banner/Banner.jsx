const Banner = () => {
    return (
        <div className="bg-[url('/images/banner-bg.png')] bg-no-repeat bg-cover h-screen
        flex justify-center "
        >

            <div className="flex flex-col gap-28  items-center">
                <div className="mt-12">
                    <div className="text-[#D7FFA5] font-normal text-6xl font-sree">Discover </div>
                    <div className="text-white fonr-normal text-6xl font-sree">our New Products for You</div>
                </div>


                <div className="flex justify-center items-center py-3 px-2 gap-2 bg-[#73A336] w-fit text-base rounded-md">
                    <div className="text-white font-sree text-xl">Shop Now</div>
                    <div>
                        <img src="/icons/arrow-btn-icon.png" alt="arrow-btn" />
                    </div>
                </div>



                <div className="flex gap-5 ">
                    <div className="flex flex-col gap-4  items-center">
                        <p className="border-b text-white font-sree text-sm">The Ordinary</p>
                        <img src="public/images/banner-ord.png" alt="cart-img" className="w-fit" />
                    </div>


                    <div className="flex flex-col gap-4 items-center mt-20">
                        <p className="border-b text-white font-sree text-sm">The Body Shop</p>
                        <img src="public/images/banner-shop.png" alt="cart-img" className="w-fit" />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Banner