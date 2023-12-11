import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const products = [
    {
        id: 1,
        catagory: 'The Ordinary',
        name: "Peeling Solution - Exfoliator",
        price: "$10.80",
        image: "/images/peeling-soln.png",
        logo: "/icons/cart-plus.png"
    },
    {
        id: 2,
        catagory: 'The Body Shop',
        name: "Body butter - 100 gms",
        price: "$7.80",
        image: "/images/body-butter.png",
        logo: "/icons/cart-plus.png"
    },
    {
        id: 3,
        catagory: 'The Body Shop',
        name: "Showe gel - 250ml",
        price: "$13.90",
        image: "/images/show-gel.png",
        logo: "/icons/cart-plus.png"
    },
    {
        id: 4,
        catagory: 'Bath & Body Works',
        name: "Hand Soap- 250ml",
        price: "$24.90",
        image: "/images/hand-soap.png",
        logo: "/icons/cart-plus.png"
    },
    {
        id: 5,
        catagory: 'Bath & Body Works',
        name: "Hand Soap- 250ml",
        price: "$24.90",
        image: "/images/hand-soap.png",
        logo: "/icons/cart-plus.png"
    },
    {
        id: 6,
        catagory: 'Bath & Body Works',
        name: "Hand Soap- 250ml",
        price: "$24.90",
        image: "/images/hand-soap.png",
        logo: "/icons/cart-plus.png"
    }, {
        id: 7,
        catagory: 'Bath & Body Works',
        name: "Hand Soap- 250ml",
        price: "$24.90",
        image: "/images/hand-soap.png",
        logo: "/icons/cart-plus.png"
    }
]


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#646464" }}
            onClick={onClick}
        />
    );
}


const ProductSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,

    };
    return (
        <div className="px-10">
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="mt-5 adjuster"  >
                        <div className="bg-[#E6E6E6]">
                            <img src={product.image} alt={product.name} className="w-full" />
                            <div className="mt-2 px-2">
                                <p className="font-medium text-lg font-sree text-[#12651A]">{product.catagory}</p>
                                <p className="text-lg font-sree ">{product.name}</p>
                            </div>

                            <div className="px-2 flex pb-2 justify-between items-center">
                                <p className="text-[#12651A] font-abhaya">{product.price}</p>
                                <img src="/icons/cart-plus.png" alt="cart-logo" />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>











        </div>
    )
}

export default ProductSlider




