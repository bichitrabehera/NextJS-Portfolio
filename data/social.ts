import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const SOCIAL_LINKS = [
  {
    id: "x",
    icon: FaXTwitter,
    url: "https://x.com/bichitradotdev",
    label: "X",
    color: "#ddd",
  },
  {
    id: "github",
    icon: FaGithub,
    url: "https://github.com/bichitrabehera",
    label: "GitHub",
    color: "#ddd",
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/bichitra-behera-99b189291",
    label: "LinkedIn",
    color: "#0077B5",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/imdaakuu",
    label: "Instagram",
    color: "#E4405F",
  },
  {
    id: "discord",
    icon: FaDiscord,
    url: "https://discord.com/users/1192891032220733510",
    label: "Discord",
    color: "#5865F2",
  },
  {
    id: "email",
    icon: MdEmail,
    url: "mailto:bichitrabehera.345@gmail.com",
    label: "Email",
    color: "#D44638",
  },
];