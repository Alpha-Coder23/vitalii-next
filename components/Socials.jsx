import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaReddit,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Alpha-Coder23" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/vitalii-vlasiuk-ab9bba350/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
