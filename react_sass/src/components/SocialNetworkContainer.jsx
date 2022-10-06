import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link:'https://www.linkedin.com/in/gabrielfbordin/' },
  { name: "github", icon: <FaGithub />, link: 'https://github.com/gabeflowers' },
  { name: "instagram", icon: <FaInstagram />, link:'https://www.instagram.com/gabriel__fb/' },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;