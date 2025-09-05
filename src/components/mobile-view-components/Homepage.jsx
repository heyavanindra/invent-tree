import React from 'react'

const HomepageMobile = () => {
  return (
    <>
          <div className="flex flex-col bg-violet-300 justify-center items-center h-screen">
      <div className="p-6">
        <h1 className="text-black font-semibold text-2xl text-center tracking-tight leading-tight">
        To empower political leaders, candidates, and parties with strategic, data-driven consultancy and innovative digital tools that enhance voter engagement, streamline campaign management, and drive successful election outcomes.
        </h1>
        
      </div>
      <span className="h-px mt-4 w-[50vw] bg-black mask-r-from-0% mask-l-from-0%"></span>
      <span className="text-xl">Our Mission</span>
      <div className="p-6">
        <p className="text-black font-normal text-md text-center tracking-normal leading-tight">
        At Nivesh Jano, we are dedicated to transforming political vision into electoral success. Our comprehensive consultancy services span every aspect of modern campaigning — from strategic planning and voter outreach to app development, branding, and real-time war room operations. With a strong foundation in political science, technology, and analytics, our team brings a unique blend of expertise to the table. We help you craft compelling narratives, engage meaningfully with voters, and make informed decisions using actionable insights.
        </p>
      </div>
      <button className="rounded-lg px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-400 font-semibold cursor-pointer hover:scale-101 transition-transform duration-300 ease-in-out">
            Learn More
          </button>
    </div>
    </>
  )
}

export default HomepageMobile