import { Outlet, Link, useLocation } from "react-router";
import { Instagram, Mail } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import qppLogo from "figma:asset/09ff578e27f9e62e260980f5e1785d0f54223246.png";

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-gray-800 text-white shadow-md" role="banner">
        <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              aria-label="Q++ Home"
            >
              <img 
                src={qppLogo} 
                alt="Q++ Logo" 
                className="w-12 h-12 object-contain"
              />
            </Link>
            <ul className="flex gap-6 list-none m-0 p-0">
              <li>
                <Link
                  to="/"
                  className={`hover:underline ${location.pathname === "/" ? "underline" : ""}`}
                  aria-current={location.pathname === "/" ? "page" : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/minigame"
                  className={`hover:underline ${location.pathname === "/minigame" ? "underline" : ""}`}
                  aria-current={location.pathname === "/minigame" ? "page" : undefined}
                >
                  Minigame
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={`hover:underline ${location.pathname === "/events" ? "underline" : ""}`}
                  aria-current={location.pathname === "/events" ? "page" : undefined}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`hover:underline ${location.pathname === "/contact" ? "underline" : ""}`}
                  aria-current={location.pathname === "/contact" ? "page" : undefined}
                >
                  Get Connected
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-1" role="main">
        <Outlet />
      </main>

      <footer className="bg-gray-800 py-6" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center gap-4">
            <span className="text-gray-300">Connect with us:</span>
            <nav aria-label="Social media links">
              <ul className="flex gap-4 list-none m-0 p-0">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                    aria-label="Follow us on Instagram (opens in new tab)"
                  >
                    <Instagram className="w-6 h-6" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-indigo-400 transition-colors"
                    aria-label="Join our Discord server (opens in new tab)"
                  >
                    <SiDiscord className="w-6 h-6" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:qpp@cs.washington.edu"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="Email us at qpp@cs.washington.edu"
                  >
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}