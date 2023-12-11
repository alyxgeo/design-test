
import ProductSlider from './ProductSlider'

const Products = () => {
    return (
        <div>
            <div className='flex items-center justify-between
             bg-[#F3F3F3] px-16 py-6' >
                <div>Best Selling Products</div>
                <div className='border-b border-black' >View All Products</div>
            </div>

            <div className='bg-[#FFFFFF]'>
                <ProductSlider />
            </div>

        </div>
    )
}

export default Products