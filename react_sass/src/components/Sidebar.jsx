import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

import SocialNetworkContainer from "./SocialNetworkContainer";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Gabriel Flores" />
            <p className="title">Desenvolvedor Jr.</p>
            <SocialNetworkContainer />
            <InformationContainer />
            <a href="" className="btn">
                Dowload currículo
            </a>
        </aside>
    );
}

export default Sidebar