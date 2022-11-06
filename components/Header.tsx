import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isActiveLink = (href: string): boolean => router.route === href;
  return (
    <header className="lg:pt-[40px] md:pt-0 pt-6 md z-50 relative ">
      <nav className=" w-full pl-6 lg:pl-[55px] md:pl-[39px] flex items-center justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>

        <span className="h-px hidden lg:block z-20 xl:w-[370px] lg:w-[400px]  absolute left-[167px] bg-White/25 "></span>
        <button className="z-10" onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <svg className="mr-6 md:hidden" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          ) : (
            <svg className="mr-6 md:hidden" width="24" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          )}
        </button>

        <ul
          className={`${
            open ? "flex" : "hidden md:flex"
          } absolute top-0 right-0  w-2/3 md:w-auto md:static flex flex-col md:flex-row text-white md:py-[38px] items-start md:items-center pt-[118px]  h-screen md:h-auto gap-8 md:gap-12 px-8 bg-White/5 backdrop-blur-md  xl:pr-[165px] xl:pl-[123px] md:px-12 font-Barlow text-base font-normal uppercase  `}
        >
          <li className={`nav-item ${isActiveLink("/") && "active"}`}>
            <Link href="/">
              <a>
                <span className="md:hidden lg:inline-block pr-[14px] font-bold">
                  00
                </span>
                Home
              </a>
            </Link>
          </li>
          <li
            className={`nav-item ${isActiveLink("/destination") && "active"}`}
          >
            <Link href="/destination">
              <a>
                <span className="md:hidden lg:inline-block pr-[14px] font-bold">
                  01
                </span>
                Destination
              </a>
            </Link>
          </li>
          <li className={`nav-item ${isActiveLink("/crew") && "active"}`}>
            <Link href="/crew">
              <a>
                <span className="md:hidden lg:inline-block pr-[14px] font-bold">
                  02
                </span>
                Crew
              </a>
            </Link>
          </li>
          <li className={`nav-item ${isActiveLink("/technology") && "active"}`}>
            <Link href="/technology">
              <a className="tracking-[2.7px]">
                <span className="md:hidden lg:inline-block pr-[14px] font-bold">
                  03
                </span>
                Technology
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
