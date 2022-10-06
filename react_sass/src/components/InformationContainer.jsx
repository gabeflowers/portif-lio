import {AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";


import '../styles/components/informationcontainer.sass'

const informationcontainer = [
    { name: "telefone", icon: <AiFillPhone />, title: "(51)98952-6065" },
    { name: "email", icon: <AiOutlineMail />, title: "g.f.bordin@gmail.com" },
    { name: "localização", icon: <AiFillEnvironment />, title: "Cachoeirinha, RS" },
];

const InformationContainer = () => {
    return (
        <section id="information">
            {informationcontainer.map((infos) =>(
                <div className="info-card">
                    <a id={infos.name} key={infos.name}>{infos.icon} </a> 
                    <div>
                        <h3>{infos.name}</h3>
                        <p>{infos.title}</p>
                    </div>
                </div>
            ))}  
        </section>
    );
}

export default InformationContainer