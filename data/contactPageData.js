import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+380)978 33 6434",
    action: () => (window.location.href = "tel:380978336434"),
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "vlasiukvitalii54@gmail.com",
    action: () => (window.location.href = "mailto:vlasiukvitalii54@gmail.com"),
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Shepetivka, Ukraine",
    action: () =>
      window.open(
        "https://www.google.com/maps/search/?api=1&query=Shepetivka,+Shepetivka, Ukraine",
        "_blank"
      ),
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "Connect with me on LinkedIn",
    action: () =>
      window.open("https://www.linkedin.com/in/vitalii-vlasiuk-ab9bba350/", "_blank"),
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    description: "Check out my GitHub",
    action: () => window.open("https://github.com/Alpha-Coder23", "_blank"),
  },
];

export default info;
