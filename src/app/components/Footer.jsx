import React from "react";
import Link from "next/link";
import {
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";
import FooterMarquee from "./MarquueFooter";

const Footer = () => {
  const mainLinks = [
    { name: "For designers", href: "/for-designers" },
    { name: "Hire talent", href: "/hiring" },
    { name: "Inspiration", href: "/shots/popular" },
    { name: "Advertising", href: "/advertise" },
    { name: "Blog", href: "/stories" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Support", href: "/contact" },
  ];

  const bottomLeft = [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Cookies", href: "/cookie-policy" },
  ];

  const bottomRight = [
    { name: "Jobs", href: "/directories/jobs" },
    { name: "Designers", href: "/directories/designers" },
    { name: "Freelancers", href: "/directories/freelance-designers" },
    { name: "Tags", href: "/tags" },
    { name: "Places", href: "/places" },
    { name: "Resources", href: "/resources" },
  ];

  const socials = [
    { icon: <FaXTwitter />, href: "https://x.com" },
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaPinterest />, href: "https://pinterest.com" },
  ];

  return (
    <footer className="bg-white">
      <FooterMarquee />

      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          
          <Link href="/" className="text-xl font-bold">
            Dribbble
          </Link>

          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {mainLinks.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="font-semibold hover:text-black"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 text-xl">
            {socials.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target="_blank"
                className="hover:text-black"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-16 gap-4 text-sm text-gray-500">
          
          <ul className="flex flex-wrap gap-4">
            <li>© 2026 Dribbble</li>
            {bottomLeft.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="hover:text-black">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-4">
            {bottomRight.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="hover:text-black">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;