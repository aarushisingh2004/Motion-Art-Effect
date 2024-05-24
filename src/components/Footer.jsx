import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="mt-8  text-white py-4" style={{ background: 'linear-gradient(to left, #5E11FF 0%, #5E11FF 30%, #F87516 90%, #F87516 100%)' }}>
    <div className="container mx-auto px-4 text-center">
      <div className="flex flex-row md:flex-row justify-center ">
        <a href="#" className="hover:underline mr-4">Documentation</a>
        
        <a href="#" className="hover:underline">Support</a>
      </div>
      <div className="mt-2 text-sm">
        © 2024 Company Name. All rights reserved.
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
