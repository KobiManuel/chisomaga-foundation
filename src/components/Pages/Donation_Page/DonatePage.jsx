import React from 'react'
import Wrapper from '../../UI/Wrapper'
import NotificationBar from '../Landing_Page/Navbar/NotificationBar'
import { useNavigate } from "react-router-dom";
import Button from '../Landing_Page/Button/Button';


const DonatePage = () => {
  const navigate = useNavigate();
  return (
    <>
    <NotificationBar />
       <Wrapper>
       <div className="h-fit bg-gray-300 body-font font-TomatoFont">
        <div className="py-12">
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="md:grid md:grid-cols-3 gap-2 ">
                  <div className="col-span-2 p-5">
                    <h1 className="text-xl font-medium ">Shopping Cart</h1>
                   
                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                      <div className="flex items-center">
                        <i className="fa fa-arrow-left text-sm pr-2"></i>
                        <span
                          className="text-md  font-medium text-[var(--primary)] cursor-pointer hover:text-opacity-75"
                          onClick={() => navigate("/")}
                        >
                          Go Back To Home
                        </span>
                      </div>

                      <div className="flex justify-center items-end">
                        <span className="text-sm font-medium text-gray-400 mr-1">
                          Total Donation amount:
                        </span>
                        <span className="text-lg font-bold text-gray-800 ">
                          $
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" p-5 bg-gray-800 rounded overflow-visible h-fit">
                    <span className="text-xl font-medium text-gray-100 block pb-3">
                      Card Details
                    </span>

                    <span className="text-xs text-gray-400 ">Card Type</span>

                    <div className="overflow-visible flex justify-between items-center mt-2">
                      <div className="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10">
                        <span className="italic text-lg font-medium text-gray-200 underline">
                          VISA
                        </span>

                        <div className="flex justify-between items-center pt-4 ">
                          <span className="text-xs text-gray-200 font-medium">
                            ****
                          </span>
                          <span className="text-xs text-gray-200 font-medium">
                            ****
                          </span>
                          <span className="text-xs text-gray-200 font-medium">
                            ****
                          </span>
                          <span className="text-xs text-gray-200 font-medium">
                            ****
                          </span>
                        </div>

                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs  text-gray-200">
                            John Doe
                          </span>
                          <span className="text-xs  text-gray-200">12/18</span>
                        </div>
                      </div>

                      <div className="flex justify-center  items-center flex-col">
                        <img
                          alt="/"
                          src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                          width="40"
                          className="relative right-5"
                        />
                        <span className="text-xs font-medium text-gray-200 bottom-2 relative right-5">
                          mastercard.
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center flex-col pt-3">
                      <label className="text-xs text-gray-400 ">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="flex justify-center flex-col pt-3">
                      <label className="text-xs text-gray-400 ">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                        placeholder="****     ****      ****      ****"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
                      <div className="col-span-2 ">
                        <label className="text-xs text-gray-400">
                          Expiration Date
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                            placeholder="mm"
                          />
                          <input
                            type="text"
                            className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                            placeholder="yyyy"
                          />
                        </div>
                      </div>

                      <div className="">
                        <label className="text-xs text-gray-400">CVV</label>
                        <input
                          type="text"
                          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                          placeholder="XXX"
                        />
                      </div>
                    </div>

                    <Button className=' text-white !shadow-2xl !w-full'>checkout</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       </Wrapper>
    </>
  )
}

export default DonatePage