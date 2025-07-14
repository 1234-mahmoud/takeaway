import {
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const contact = [
  {
    text: "Location",
    icon: <FaLocationArrow />,
    href: "",
  },
  {
    text: "Call +0123456789",
    icon: <FaPhone />,
    href: "tel:+123456789",
  },
  {
    text: "demo@gmail.com",
    icon: <FaMailBulk />,
    href: "mailto:demo@gmail.com",
  },
];

const socialMedia = [
  {
    icon: <FaFacebook />,
    href: "",
  },
  {
    icon: <FaTwitter />,
    href: "",
  },
  {
    icon: <FaLinkedin />,
    href: "",
  },
  {
    icon: <FaInstagram />,
    href: "",
  },
  {
    icon: <FaPinterest />,
    href: "",
  },
];

export default function Footer() {
  return (
    <footer className="py-24 bg-gray-800 text-white">
      <div className="container">
        <div className=" grid md:grid-cols-3 gap-y-8">
          <div className="text-center">
            <h3 className="font-bold text-xl mb-3">Contact Us</h3>
            <ul>
              {contact.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 hover:text-amber-400 duration-100 justify-center mb-2"
                  >
                    <span>{link.icon}</span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-xl mb-3">Takeaway</h3>
            <p className="max-w-[400px] mx-auto">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <ul className="mt-5 flex justify-center items-center gap-2">
              {socialMedia.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="bg-white p-2 inline-block text-gray-800 text-xl rounded-full hover:text-amber-400"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-xl mb-3">Opening Hours</h3>
            <p className="mb-6">Everyday</p>
            <p>10.00 Am -10.00 Pm</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="mb-6">
            © 2025 All Rights Reserved By Free Html Templates
          </p>
          <p>© Distributed By ThemeWagon</p>
        </div>
      </div>
    </footer>
  );
}
