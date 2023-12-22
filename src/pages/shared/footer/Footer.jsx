import { FaFacebook, FaGithub, FaLinkedin, FaVoicemail } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
import "./footer.css";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mohammad-mohiuddin-0073572a4",
      //   style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/MohiuddinRaki",
    },
    {
      id: 3,
      child: (
        <>
          <FaFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/mohammadmohiuddin1197",
    },
    {
      id: 4,
      child: (
        <>
          <FaVoicemail size={30} />
        </>
      ),
      href: "mailto:mohammadmohiuddin3490@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          <GrResume />
        </>
      ),
      href: "/public/My Resume.pdf",
      //   style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <footer className="footer footer-center p-10 shadow-2xl bg-[#701c45] text-[#ed1b2f] rounded font-medium">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        {/* <div className="grid grid-flow-col gap-4"> */}
        <ul className="flex gap-7">
          {links.map(({ id, child, href, download }) => (
            <li
              key={id}
              className="flex justify-between items-center h-14 hover:mt-[-10px] hover:rounded-md duration-300"
            >
              <a
                href={href}
                className="flex justify-between items-center w-full"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by Rakibs ToDo List</p>
      </aside>
    </footer>
  );
};

export default Footer;
