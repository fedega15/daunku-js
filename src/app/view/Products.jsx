// local imports
import { productsTitle, productsBtnText, products } from "../data";

import arrowIcon from "../assets/arrow-icon.svg";
import starsIcon from "../assets/stars-icon.svg";
import plusIcon from "../assets/plus-icon.svg";

import FadeIn from "../components/FadeIn";
import Image from "next/image";
import NavLink from "../components/NavLink";
/* import NavLink from "../components/NavLink"; */

const Products = () => {
  return (
  <div id="products" className=" flex flex-col bg-[#f4f5f7] 2xl:flex-row gap-[128px]  2xl:gap-2 2xl:justify-between mt-[160px] 2xl:pt-[130px] pb-[160px] max-w-[1490px] mx-auto px-10 w-full">
    <FadeIn delay={0.2} direction="right">
      <div className="flex flex-col">
        <h1 className="text-center 2xl:text start text-fontBlack text-5xl lg:text-[64px] font-medium mb-6 ">
          {productsTitle}
        </h1>
        <NavLink href="#shop"  className="flex items-center gap-2 bg-transparent text-fontBlack border-opacity-20 border-transparent font-bold py-2 px-4 rounded-lg w-fit border hover:border-black outline-none focus:outline-none ease-linear transition-all duration-350 mx-auto 2xl:mx-0 mb-10 2xl:mb-0">
          <h5 className="text-lg lg:text-xl text-[#4F4F4F] font-medium border-black">
            {productsBtnText}
            </h5>
            <Image src={arrowIcon} alt="" />
        </NavLink>
      </div>
    </FadeIn>
    <div className="w-full flex flex-col md:flex-row gap-[160px] md:gap-6">
      {products.map((product, i) => (
        <FadeIn key={i} delay={(i+1) * 0.2} direction="left" fullWidth>
          <div className="h-[390px] relative flex-1 bg-[#C1D0E4] rounded-[50px] max-w-[500px] ">
            <Image src={product.img} alt="" className="absolute -top-[120px] left-1/2 -translate-x-1/2"/>
              <div className="absolute bottom-0 w-full bg-white h-[240px] rounded-[50px] shadow-md px-8 py-[26px] flex flex-col justify-between">
               <div>
                <h2 className="mb-2 text-fontBlack text-3xl lg:text-[32px] font-medium">
                  {product.title}
                </h2>
                <h5 >
                {product.coment}
                </h5>
                
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-fontBlack text-2xl lg:text-3xl font-medium">
                  {product.price}
                </h3>
                <Image src={plusIcon} alt=""  className="cursor-pointer h-10 xs:h-12 w-10 xs:w-12 "/>
                </div>
              </div>
          </div>
        </FadeIn>
      ))}    
    </div>
  </div>
  )
};

export default Products;
