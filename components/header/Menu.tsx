import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { animateScroll as scroll, scroller } from 'react-scroll'
import FAQ from "../content/FAQ";

export default function Menu() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isShowFaq, setShowFAQ] = React.useState(false);
  const onScrollToTop = () => {
    scroll.scrollToTop();
  }
  const onScrollToWhatIsTheNFT = () => {
    scroller.scrollTo('element-what-is-the-nft', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -64
    });
  }
  const onScrollToGetPower = () => {
    scroller.scrollTo('element-get-power', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -64
    });
  }
  const onScrollToTheTeam = () => {
    scroller.scrollTo('element-team', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -64
    });
  }
  const showFaq = () => {
    setShowFAQ(!isShowFaq);
  }

  const hideFaq = () => {
    setShowFAQ(false);
  }

  return (
    <>
      <nav className="flex flex-start items-center justify-between py-1 bg-menu-bg fixed w-full z-10 text-white">
        <div className="container flex flex-wrap items-center justify-between w-full">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ml-10">
            <div className="flex flex-start">
              <div className="pt-1.5">
                <span className="text-xl font-bold  tracking-widest">NFT </span>
                <span className="text-xs  tracking-widest font-bold">AVATARMAKER.COM</span>
              </div>
              <div>
                  <a
                    className="px-3 py-2 flex text-2xl font-bold hover:opacity-75 cursor-pointer ml-20 lg:ml-10 tracking-widest"
                    onClick={onScrollToTop}
                  >
                    CREATE AN AVATAR
                  </a>
              </div>
            </div>
            <div className="flex">
              <button
                className="cursor-pointer text-2xl px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FontAwesomeIcon className="w-6" icon={faBars}/>
              </button>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center ml-10" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none xl:ml-auto font-bold">
              <li className="nav-item">
                <a
                  className="py-2 flex text-sm hover:opacity-75 cursor-pointer xl:mr-10 lg:mr-3 tracking-widest"
                  onClick={onScrollToWhatIsTheNFT}
                >
                  WHAT IS THE NFT<br/>AVATAR MAKER
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="py-2 flex text-sm hover:opacity-75 cursor-pointer xl:mr-10 lg:mr-3 tracking-widest"
                  onClick={onScrollToGetPower}
                >
                  GET A<br/>POWER PASS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="py-2 flex text-sm hover:opacity-75 cursor-pointer pt-4  xl:mr-10 lg:mr-3 tracking-widest"
                  onClick={onScrollToTheTeam}
                >
                  THE TEAM
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="py-2 flex text-sm hover:opacity-75 cursor-pointer pt-4  xl:mr-10 lg:mr-3 tracking-widest"
                  href='http://eepurl.com/hLzGQz' target='_blank' rel="noreferrer"
                >
                  SUBSCRIPTION
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="py-2 flex text-sm hover:opacity-75 cursor-pointer pt-4 xl:mr-16 lg:mr-10 tracking-widest"
                  onClick={showFaq}
                >
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="py-2 flex text-black italic text-lg font-bold hover:text-white cursor-pointer pt-3 pr-5"
                >
                  CONNECT WALLET
                </a>
              </li>
            </ul>
          </div>
        </div>
        <FAQ show={isShowFaq} funcHide={hideFaq}/>
      </nav>
    </>
  );
}