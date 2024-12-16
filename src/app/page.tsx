
import React from 'react'
import black from '../public/rs-group-wrap ⏵ rs-group.svg'
import Image from 'next/image'
import { Rye } from 'next/font/google'
import { Libre_Bodoni } from 'next/font/google' // Correct the import for Libre Bodoni

// Load the Rye font
const rye = Rye({
  weight: '400', // Specify weight if needed (default is 400)
  subsets: ['latin'],
})

// Load the Libre Bodoni font
const libreBodoni = Libre_Bodoni({
  weight: '400', // Specify weight if needed
  subsets: ['latin'],
})

const Page = () => {
  return (
    <div className="h-screen">
      {/* Apply the Rye font to MANZZARI text */}
      <div
        className={`w-full h-[88px] bg-[#A29875] text-[44px] font-bold text-[#FFFFFF] leading-[93.75px] pl-4
 ${rye.className}`}
      >
        MANZZARI
      </div>

      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-4 md:m-12">
          {/* Apply the Libre Bodoni font to heading */}
          <h1 className={`text-[44px] font-bold ${libreBodoni.className}`}>
            IMPECCABLE <br />CRAFTSMANSHIP AND<br /> FINESSE
          </h1>
          <p className={`text-[30px] leading-[49.35px] mt-1 tracking-[2.5%] ${libreBodoni.className}`}>
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button
            type="button"
            className={`w-[237px] h-[66px] bg-[#A29875] text-white font-normal ${rye.className} leading-[33.89px] text-2xl mt-8  ${libreBodoni.className}`}
          >
            Explore Now
          </button>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={black}
            alt="image"
            height={550}
            width={450}
            className="object-contain" // Optional: Ensures image scales well within its container
          />
        </div>
      </div>
    </div>
  )
}

export default Page
