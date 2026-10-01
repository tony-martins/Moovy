import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { BiMoviePlay } from "react-icons/bi";
import { SiYoutubeshorts } from "react-icons/si";
import { MdLiveTv } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsEnvelopeArrowDown } from "react-icons/bs";

export default function Dashboard() {
  const location = useLocation();

  return (
    <section className="w-full min-h-screen bg-gray-950 text-white">
      {/* sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 px-6 py-8">
        <img src={logo} alt="Moovy" className="w-32 mb-12" />

        <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-500">
          Films
        </h2>

        <div className="flex flex-col gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition ${isActive || location.pathname.startsWith("/films/") ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`
            }
          >
            <BiMoviePlay size={22} /> <span>All Films</span>
          </NavLink>

          <NavLink
            to="shorts"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition ${isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`
            }
          >
            <SiYoutubeshorts size={20} /> <span>Shorts</span>
          </NavLink>

          <NavLink
            to="tv-shows"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition ${isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`
            }
          >
            <MdLiveTv size={22} /> <span>TV Shows</span>
          </NavLink>
        </div>
      </aside>

      {/* RIGHT SIDE */}
      <div className="ml-64">
        {/* NAVBAR */}
        <nav className="fixed left-64 right-0 top-0 z-50 flex h-20 items-center justify-between border-b border-gray-800 bg-gray-950 px-8">
          <input
            type="search"
            placeholder="search films..."
            className="w-96 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-white outline-none placeholder:text-gray-500 focus:border-gray-500"
          />

          <div className="flex items-center gap-5 text-gray-400">
            <a href="">
              <FaFacebook
                size={20}
                className="cursor-pointer transition hover:text-white"
              />
            </a>
            <a href="">
              <FiInstagram
                size={20}
                className="cursor-pointer transition hover:text-white"
              />
            </a>
            <a href="">
              <BsEnvelopeArrowDown
                size={20}
                className="cursor-pointer transition hover:text-white"
              />
            </a>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="pt-30 px-8">
          <Outlet />
        </main>
      </div>
    </section>
  );
}
