import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiPython
}from 'react-icons/di'

import '../styles/components/technologies.sass'

const technologies = [
    {id: "html", name: "HTML5", icon: <DiHtml5 />, text: "É uma linguagem de marcação de texto ultilizada para criar páginas na Web. Tenho 7 meses de experiência nessa tecnologia."},
    {id: "css", name: "CSS3", icon: <DiCss3 />, text: "É um mecanismo para adcionar estilo a um documento web. Tenho 7 meses de expêriencia nessa tecnologia."},
    {id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "É uma linguagem de programação, juntamente com HTML e CSS é uma das três principais tecnologias da web. Tenho 6 meses de expêriencia com essa tecnologia."},
    {id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "Com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação, não dependendo de um browser para sua execução."},
    {id: "mysql", name: "MySQL", icon: <DiMysql />, text: "É um gerenciamento de banco de dados, que ultiliza a linguagem SQL como interface. Tenho alguns projetos ultilizando esse database, você pode conferir em meu Github!"},
    {id: "react", name: "React", icon: <DiReact />, text:"É um framework do js ultilizado para criar interfaces do usuário em pagínas web. Este site foi desenvolvido com a ajuda deste framework!"},
    {id: "python", name: "Python", icon: <DiPython />, text:"É uma linguagem de programação de alto nivel, ou seja, sua sintaxe é mais fácil de compreender, ela faz parte das minhas ultimas tech's estudadas."},
]

const TechnologiesContainer = () => {
    return (
        <section className='technologies-container'>
            <h2>Tecnologias</h2>
            <div className='technologies-grid'>
                {technologies.map((tech) =>(
                    <div className='technology-card' id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technoloy-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.text}</p>
                        </div>
                    </div>
                ))} 
            </div>
        </section>
    )
}

export default TechnologiesContainer