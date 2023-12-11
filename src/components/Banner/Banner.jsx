const Banner = () => {
    return (
        <div className="bg-[url('/images/banner-bg.png')] bg-no-repeat bg-cover h-screen
        lg:flex lg:justify-center "
        >
 
            <div className="lg:flex lg:flex-col lg:gap-28  lg:items-center px-5 lg:px-0 ">

                <div className="lg:mt-12">
                    <div className="text-[#D7FFA5] font-normal lg:text-6xl font-sree text-3xl">Discover </div>
                    <div className="text-white fonr-normal lg:text-6xl font-sree text-3xl">our New Products for You</div>
                </div>


                <div className=" mt-10 lg:mt-0 flex justify-center items-center py-3 px-2 gap-2 bg-[#73A336] w-fit text-base rounded-md">
                    <div className="text-white font-sree text-xl">Shop Now</div>
                    <div>
                        <img src="/icons/arrow-btn-icon.png" alt="arrow-btn" />
                    </div>
                </div>



                <div className="lg:flex lg:gap-5 mt-5 lg:mt-0 ">
                    <div className="lg:flex flex-col gap-4  items-center">
                        <p className="lg:border-b text-white font-sree text-sm">The Ordinary</p>
                        <img src="public/images/banner-ord.png" alt="cart-img" className="w-fit" />
                    </div>


                    <div className="lg:flex flex-col gap-4 items-center lg:mt-20">
                        <p className="lg:border-b text-white font-sree text-sm">The Body Shop</p>
                        <img src="public/images/banner-shop.png" alt="cart-img" className="w-fit" />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Banner