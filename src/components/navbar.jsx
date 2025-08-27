import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="nav py-5 w-full bg-black text-white flex items-center justify-between px-4 md:px-7 lg:px-10">
        <div className="logo text-[1.4rem] md:text-[1.8rem] font-medium">
          Taha's <span className="text-yellow-400">Store</span>
        </div>

        {/* Desktop Links */}
        <div className="links hidden text-[1.1rem] md:flex items-center gap-12">
          <a href="#">Home</a>
          <a href="#">Collections</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="hamberg block md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <i className="ri-menu-3-line"></i>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 p-6 text-lg font-medium">
          <a href="#">Home</a>
          <a href="#">Collections</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
          <a href="#">Support</a>
        </div>
      </div>
    </>
  );
};
