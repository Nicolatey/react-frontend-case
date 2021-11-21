import { useState, useEffect } from "react";

const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  // The toggleNav function enables the mobile navigation to open and close.
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  // The screen width is being checked by this function in order to provide the most suitable navigation bar.
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto md:p-4 p-2">
          <div className="flex justify-between">

            {/* logo */}
            <div className="flex items-center">
              <img
                src={"https://socialbrothers.nl/wp-content/themes/social_brothers/assets/SBlogo.svg"}
                alt=""
                className="h-14 md:h-24"
              ></img>
            </div>

            {/* navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/">Home</a>
              <a href="/Blog">Blog</a>
            </div>

            {/* mobile button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleNav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* mobile navigation */}
          {(toggleMenu || screenWidth > 500) && (
            <div className="flex-col md:hidden mt-2"> 
              <a href="/" className="flex justify-center py-2 px-4 text-sm">Home</a>
              <a href="/Blog" className="flex justify-center py-2 px-4 text-sm">Blog</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
