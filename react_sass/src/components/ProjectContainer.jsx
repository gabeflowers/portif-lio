import Decodificador from "../img/decodificador.jpg"
import Cadastro from "../img/cadastroclientes.jpg"
import Jogo from "../img/jogodaforca.jpg"
import Nutricao from "../img/nutricao.jpg"
import '../styles/components/projectscontainer.sass'

const ProjectContainer = () => {
    return(
        <section className="projects-container">
            <h2>Projetos</h2>
            <div className='project-grid'>
                <div className='project-card' id='decod' key='decod'>
                    <img src={Decodificador} alt="Decodificador de textos"/>
                    <div className="project-info">
                        <h3>Codificador de Textos</h3>
                        <p id='description'>Ferramenta encriptadora de textos, realizado como Challenge durante curso promovido pela Oracle+Alura.</p>
                        <p id="stack">Ultilizado Html, Css e JavaScript</p>
                        <a href="#" className="btn">
                            Ver Projeto
                        </a>
                    </div>
                </div>
                <div className='project-card' id='cadastro' key='cadastro'>
                    <img src={Cadastro} alt="Cadastro de Clientes"/>
                    <div className="project-info">
                        <h3>Cadastro de Clientes</h3>
                        <p id='description'>Pagína para cadastro de clientes, CRUD com LocalStorage como banco de dados, layout responsivo.</p>
                        <p id="stack">Ultilizado Html, CSS e JavaScript</p>
                        <a href="#" className="btn">
                            Ver Projeto
                        </a>
                    </div>
                </div>
                <div className='project-card' id='jogo' key='jogo'>
                    <img src={Jogo} alt="Jogo da Forca"/>
                    <div className="project-info">
                        <h3>Jogo da Forca</h3>
                        <p id='description'>Classico jogo da forca, realizei durante curso da Oracle+Alura, desenvolvido para aprimorar meus conhecimentos em js puro, layout responsivo.</p>
                        <p id="stack">Ultilizei Html, CSS e JavaScript</p>
                        <a href="#" className="btn">
                            Ver Projeto
                        </a>
                    </div>
                </div>
                <div className='project-card' id='nutricao' key='nutricao'>
                    <img src={Nutricao} alt="Aparecida Nutrição"/>
                    <div className="project-info">
                        <h3>Aparecida Nutrição</h3>
                        <p id='description'>Desenvolvido em caráter experimental para introduzir algumas lógicas como filtro de busca, calculo de IMC e ultilizei uma API que busca pacientes hipotéticos e introduz no formulário.</p>
                        <p id='stack'>Ultilizei Html, Css e JavaScript</p>
                        <a href="#" className="btn">
                            Ver Projeto
                        </a>
                    </div>
                </div>





            </div>
            

        </section>
    )
}

export default ProjectContainer