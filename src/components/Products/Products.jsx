
import ProductSlider from './ProductSlider'

const Products = () => {
    return (
        <div>
            <div className='flex items-center justify-between
             bg-[#F3F3F3] lg:px-16 lg:py-6 p-4' >
                <div className='font-sree font-normal lg:text-3xl text-lg'>Best Selling Products</div>
                <div className='border-b border-black font-sree font-normal lg:text-xl text-sm' >View All Products</div>
            </div>

            <div className='bg-[#FFFFFF]'>
                <ProductSlider />
            </div>

        </div>
    )
}

export default Products