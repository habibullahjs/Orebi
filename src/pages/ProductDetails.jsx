import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container'
const ProductDetails = () => {
  let ProductId = useParams()
  let [singleData, setSingleData] = useState({})
  let getSingleData = () => {
    axios.get(`https://dummyjson.com/products/${ProductId.id}`).then((response) => {
      setSingleData(response.data)
    })
  }
  useEffect(() => {

    getSingleData()
  })
  const [shop, setShop] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("description");
  return (
    <>
      <div className='mb-25'>
        <Container>
          <div className="w-2/12 py-[100px]">
            <div className="">
              <h2 className='font-dm font-bold pb-[10px] text-[#262626] text-[49px]'>Products</h2>
            </div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link to={"/"} className="inline-flex items-center text-sm font-medium text-[#767676] hover:text-[#000] dark:text-gray-400 dark:hover:text-white">
                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/shop"}>
                    <div className="flex items-center">
                      <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                      </svg>
                      <a href="#" className="ms-1 text-sm font-medium text-[#767676] hover:text-[#000] md:ms-2 dark:text-gray-400 dark:hover:text-white">Shop</a>
                    </div>
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>

                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="w-2/4">
            <div className="bg-[#D8D8D8] mb-24">
              <img className='w-full h-[680px]' src={singleData.thumbnail} alt="" />
            </div>
          </div>
          <div className="w-1/2 mb-10">
            <h2 className='text-3xl font-bold text-[#262626] font-dm py-8'>{singleData.title}</h2>
            <div className="flex items-center gap-x-6 pb-6">
              <div className="flex text-[#FFD881]">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
              <div className="text-[14px] font-dm font-normal">
                <h4>1 Review</h4>
              </div>
            </div>
            <div className="flex items-center space-x-6 font-dm pb-6">
              <del className='text-[#767676] text-[16px] font-normal'>$88.00</del>
              <h4 className='text-[#262626] text-[20px] font-bold'>$44.00</h4>

            </div>
            <hr className='text-[#D8D8D8]' />
            <div className="flex items-center py-7.5 gap-x-[53px]">
              <h5>COLOR:</h5>
              <div className="flex items-center gap-x-[15px]">
                <div className="h-5 w-5 rounded-full  bg-[#979797]"></div>
                <div className="h-5 w-5 rounded-full  bg-[#FF8686]"></div>
                <div className="h-5 w-5 rounded-full  bg-[#7ED321]"></div>
                <div className="h-5 w-5 rounded-full  bg-[#15CBA5]"></div>
              </div>
            </div>
            <div className="flex gap-[73px] items-center">
              <h4 className='text-[16px] font-dm font-bold text-[#262626]'>SIZE:</h4>
              <div className="">
                <select className='w-35 border-2 px-4 py-1 cursor-pointer border-[#F0F0F0] focus:outline-0'>
                  <option value="" >S</option>
                  <option value="" >M</option>
                  <option value="" >L</option>
                  <option value="" >XL</option>
                </select>
              </div>
            </div>
            <div className="flex items-center py-8 space-x-7">
              <h5 className='text-[16px] font-dm font-bold text-[#262626]'>QUANTITY:</h5>
              <div className="flex items-center px-3 py-[4px] border-2 cursor-pointer border-[#F0F0F0] gap-x-12">
                <p className='text-[#767676] text-[16px] font-dm font-normal '>-</p>
                <p className='text-[#767676] text-[16px] font-dm font-normal '>1</p>
                <p className='text-[#767676] text-[16px] font-dm font-normal '>+</p>
              </div>
            </div>
            <hr className='text-[#D8D8D8]' />
            <div className="flex items-center font-dm py-6">
              <h5 className='text-[16px] font-bold text-[#262626]'>STATUS:</h5>
              <p className='text-[16px] font-normal text-[#767676]'>In stock</p>
            </div>
            <hr className='text-[#D8D8D8]' />
            <div className="flex items-center gap-x-5 py-7.5">
              <p className='py-4 px-11 border-2 cursor-pointer border-[#262626] text-[14px] text-[#262626] font-dm font-bold hover:text-white hover:bg-black duration-300 ease-in-out'>Add to Wish List</p>
              <p className='py-4 px-11 border-2 cursor-pointer border-[#262626] text-[14px] text-[#262626] font-dm font-bold hover:text-white hover:bg-black duration-300 ease-in-out'>Add to Cart</p>
            </div>
            <hr className='text-[#D8D8D8]' />
            <div onClick={(() => setOpen(!open))} className="flex justify-between py-6 cursor-pointer">
              <h5 className='text-[16px] font-bold font-dm'>FEATURES  & DETAILS</h5>

              {open ? <FaMinus className='text-[16px]' /> : <FaPlus className='text-[16px]' />}
            </div>
            {open &&
              <div className="pb-5">
                <h5 className='text-[16px] font-bold font-dm pb-3 '>Category: <span className='pl-2 text-[14px] text-[#767676]'>{singleData.category}</span></h5>
                <h5 className='text-[16px] font-bold font-dm pb-3'>brand: <span className='pl-2 text-[14px] text-[#767676]'>{singleData.brand}</span></h5>
                <h5 className='text-[16px] font-bold font-dm pb-3'>weight: <span className='pl-2 text-[14px] text-[#767676]'>{singleData.weight}</span></h5>
              </div>
            }
            <hr className='text-[#D8D8D8]' />
            <div onClick={(() => setShop(!shop))} className="flex justify-between py-6 cursor-pointer">
              <h5 className='text-[16px] font-bold font-dm'>SHIPPING & RETURNS</h5>
              {shop ? <FaMinus className='text-[16px]' /> : <FaPlus className='text-[16px]' />}
            </div>
            {shop &&
              <div className="pb-5">
                <h6 className='text-[16px] font-bold font-dm pb-3 '>WarrantyInformation: <span className='pl-2 text-[14px] text-[#767676]'>{singleData.warrantyInformation}</span></h6>
                <h6 className='text-[16px] font-bold font-dm  '>ShippingInformation: <span className='pl-2 text-[14px] text-[#767676]'>{singleData.shippingInformation}</span></h6>
              </div>
            }
            <hr className='text-[#D8D8D8]' />
          </div>
          <div>
            <div className="flex space-x-15 py-5">
              <h2
                onClick={() => setActiveTab("description")}
                className={`cursor-pointer text-[20px]  ${activeTab === "description" ? "font-bold text-[#262626]" : "text-[#767676]"}`}
              >
                Description
              </h2>
              <h3
                onClick={() => setActiveTab("reviews")}
                className={`cursor-pointer text-[20px] ${activeTab === "reviews" ? "font-bold text-[#262626]" : "text-[#767676]"}`}
              >
                Reviews (1)
              </h3>
            </div>

            <div className="">
              {activeTab === "description" && (
                <h4 className='font-dm'>{singleData.description}</h4>
              )}
            </div>

            <div className="">
              {activeTab === "reviews" && (
                <div className='mt-6 mb-3'>
                  <p className='text-[14px] pb-4 font-normol text-[#767676] font-dm'>1 review for Product</p>
                  <hr className='text-[#D8D8D8]' />
                  <div className="flex items-center justify-between">
                    <h4 className='flex items-center gap-x-8 pt-[23px] pb-[14px] text-[14px]  font-normol text-[#262626] font-dm'>John Ford <span className='flex text-[#FFD881] text-[10px]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span></h4>
                    <h5 className='text-[16px]  font-normol text-[#767676] font-dm'>6 months ago</h5>
                  </div>
                  <p className='text-[16px] pb-4  font-normol text-[#767676] font-dm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>
                  <hr className='text-[#D8D8D8]' />
                  <div className="w-1/2 pt-13">
                    <form action="">
                      <h4 className='mb-10 text-[20px]   font-bold text-[#262626] font-dm'>Add a Review</h4>
                      <label htmlFor="" className='text-[14px]   font-bold text-[#262626] font-dm'>Name</label>
                      <input type="text" className='w-full text-[14px]   font-normol text-[#767676] font-dm pt-2.5 pb-4 focus:outline-0 border-b-2 border-[#F0F0F0]' placeholder='Your name here' />
                      <label htmlFor="" className='mt-[23px] inline-block'>Email</label>
                      <input type="text" className='w-full text-[14px]   font-normol text-[#767676] font-dm pt-2.5 pb-4 focus:outline-0 border-b-2 border-[#F0F0F0]' placeholder='Your email here' />
                      <label htmlFor="" className='mt-[23px] inline-block'>Review</label>
                      <input type="text" className='w-full text-[14px]   font-normol text-[#767676] font-dm pt-2.5 pb-10 focus:outline-0 border-b-2 border-[#F0F0F0]' placeholder='Your review here' />
                      <p className='text-[14px] py-4 px-21 font-bold text-[#262626] font-dm  hover:text-white hover:bg-black duration-300 ease-in-out w-fit mt-5 border-2 border-[#262626]'>Post </p>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>


        </Container>
      </div>

    </>
  )
}

export default ProductDetails