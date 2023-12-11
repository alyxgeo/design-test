
const Navbar = () => {

  return (

    <div className='bg-[#8EB226] flex justify-between px-5 py-4  '>

      <div className="flex gap-2  items-center">
        <img src='/images/logo.png' alt='logo' className='w-7 h-7' />
        <img src='/images/title-logo.png' alt='logo-title'
          className='w-24' />
      </div>


      <div className="lg:flex items-center font-medium gap-5 text-white font-inter text-base hidden ">
        <div>Shop</div>
        <div>Product</div>
        <div>Contact</div>
        <div>Sale</div>
      </div>


      <div className="px-5 lg:flex gap-3 items-center  bg-neutral-100 rounded-md hidden ">
        <img src="public/icons/search-icon.png" alt="search" />
        <input placeholder="Search for products" className="text-sm bg-transparent py-2" />
      </div>


      <div className="flex gap-2">
        <img src="/icons/wishlist.png" className="w-7 h-6" />
        <img src="/icons/cart.png" className="w- h-6" />
      </div>

    </div>
  )
}

export default Navbar