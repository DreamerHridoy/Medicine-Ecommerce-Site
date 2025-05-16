import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1f2937] to-[#111827] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Medicine Shop</h2>
          <p className="text-sm leading-6">
            We provide reliable healthcare products and services tailored to
            your needs. Trusted by customers since 1992.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-500 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-sky-400 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-500 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-300 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h6 className="footer-title text-white mb-3">Services</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-white transition" href="#">
                Branding
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Design
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Marketing
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Advertisement
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="footer-title text-white mb-3">Company</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-white transition" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Jobs
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Press kit
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="footer-title text-white mb-3">Legal</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-white transition" href="#">
                Terms of use
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Privacy policy
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Cookie policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Medicine Shop — All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
