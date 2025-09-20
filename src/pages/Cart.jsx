import React from 'react'
import Container from '../components/Container'
import proimg from "../assets/pr10.png"

const Cart = () => {
  return (
    <div>
        <Container>
            <div className='mt-[124px] mb-[163px] font-dm'>
                <h3 className='text-primary text-[50px] font-bold font-dm'>Cart</h3>
            </div>
          <div className='pb-[140px]'>
              <div className='flex justify-between bg-[#F5F5F3] font-dm py-[34px] px-[20px]'>
                <div className='w-[25%]'>
                    <p className='font-bold text-primary'>
                        product
                    </p>
                </div>
                 <div className='w-[25%]'>
                    <p  className='font-bold text-primary'>
                       Price
                    </p>
                </div>
                 <div className='w-[25%]'>
                    <p  className='font-bold text-primary'>
                      Quantity
                    </p>
                </div>
                 <div className='w-[25%]'>
                    <p>
                       Total
                    </p>
                </div>
            </div>     
            
             <div className='flex justify-between items-center font-dm py-[34px] px-[20px]'>
                <div className='w-[25%]'>
                    <div className='flex items-center space-x-2'>
                      <img className='w-[60px]'src={proimg } alt=""/>
                      <p>ProductName</p>
                    </div>
                </div>
                 <div  className='w-[25%]'>
                    <p  className='font-bold text-primary font-dm'>
                      $44.00
                    </p>
                </div>
                 <div className='w-[25%]'>
                 <div className='flex items-center border-2 border-[#F0F0F0] px-[21px] py-1 space-x-[35px] text-secondary w-fit'>
                 <p>-</p>
                 <p>1</p>
                 <p>+</p>
          </div>
                    
                </div>
                 <div  className='w-[25%]'>
                     <p  className='font-bold text-primary font-dm'>
                      $44.00
                    </p>
                </div>
            </div>

          </div>
        </Container>
    </div>
  )
}

export default Cart