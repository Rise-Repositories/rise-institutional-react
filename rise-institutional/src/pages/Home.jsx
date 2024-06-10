import React, { useRef } from 'react';

const Home = () => {
    const faleConoscoRef = useRef(null);
    const servicosRef = useRef(null);
    const nossaEquipeRef = useRef(null);
    const caseDeSucessoRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="container">
            <header className="header">
                <img src="/images/logo.png" className="logo" alt="logo" />
                <div className="div-informacoes">
                    <div className="nav-bar">
                        <div className="div-fale-conosco" onClick={() => scrollToSection(faleConoscoRef)}>
                            <h3>Fale Conosco</h3>
                        </div>
                        <div className="div-servicos" onClick={() => scrollToSection(servicosRef)}>
                            <h3>Serviços</h3>
                        </div>
                        <div className="div-nossa-equipe" onClick={() => scrollToSection(nossaEquipeRef)}>
                            <h3>Nossa equipe</h3>
                        </div>
                        <div className="div-case-de-sucesso" onClick={() => scrollToSection(caseDeSucessoRef)}>
                            <h3>Case de sucesso</h3>
                        </div>
                    </div>
                </div>
            </header>

            <div className="div-botao-sucesso">
                <button className="botao-sucesso" onClick={() => scrollToSection(caseDeSucessoRef)}>
                    Veja nosso case de sucesso
                    <img src="/images/seta.png" className="seta" alt="seta" />
                </button>
            </div>

            <div className="div-juntos-crescimento">
                <h1>JUNTOS PELO SEU CRESCIMENTO</h1>
            </div>

            <div className="paragrafo-crescimento">
                <p className="paragrafo-negocio">
                    Eleve seu negócio com Rise: sua parceria em tecnologia para alcançar o sucesso!
                </p>
            </div>

            <div className="div-botao-fale-conosco">
                <button className="botao-fale-conosco" onClick={() => scrollToSection(faleConoscoRef)}>
                    Fale Conosco
                    <img src="/images/seta preta.png" alt="seta preta" />
                </button>
                <img src="/images/seta para baixo.png" className="seta-indo-para-baixo" alt="seta para baixo" />
            </div>

            {/* Adicione as referências às seções */}
            <div ref={servicosRef} className="div-nossos-servicos">
                <p>Nossos serviços</p>
            </div>

            <div className="div-todos-os-cards">
                <div className="div-transformacao-digital">
                    <div className="div-foto">
                        <img src="/images/transformacao.png" className="fotos-cards" alt="foto de transformação digital" />
                    </div>
                    <div className="div-texto-cards">Transformação digital</div>
                    <div className="texto-definicao-cards">
                        <p className="paragrafo-definicao">
                            ・Auxiliamos empresas na adoção de novas tecnologias para melhorar processos, produtos e serviços.
                            <br />
                            ・Incluímos estratégias para implementação de tecnologias emergentes como IoT, inteligência artificial e blockchain.
                        </p>
                    </div>
                </div>

                <div className="div-ciber">
                    <div className="div-foto">
                        <img src="/images/cyber.png" className="fotos-cards" alt="foto de cybersecurity" />
                    </div>
                    <div className="div-texto-cards">Cibersegurança</div>
                    <div className="texto-definicao-cards">
                        <p className="paragrafo-definicao">
                            ・Avaliação de vulnerabilidades, testes de penetração, monitoramento de segurança e resposta a incidentes.
                            <br />
                            ・Implementação de políticas e práticas de segurança para proteger dados e sistemas.
                        </p>
                    </div>
                </div>

                <div className="div-infra">
                    <div className="div-foto">
                        <img src="/images/infra.png" className="fotos-cards" alt="foto de infra" />
                    </div>
                    <div className="div-texto-cards">Infraestrutura de TI</div>
                    <div className="texto-definicao-cards">
                        <p className="paragrafo-definicao">
                            ・Monitoramento e manutenção de hardware, redes e sistemas operacionais.
                            <br />
                            ・Serviços de help desk e suporte técnico.
                        </p>
                    </div>
                </div>

                <div className="div-big-data">
                    <div className="div-foto">
                        <img src="/images/big data.png" className="fotos-cards" alt="foto de big data" />
                    </div>
                    <div className="div-texto-cards">Big data e Análise</div>
                    <div className="texto-definicao-cards">
                        <p className="paragrafo-definicao">
                            ・Implementação de soluções de análise de dados e business intelligence.
                            <br />
                            ・Inclui coleta, armazenamento, processamento e análise de grandes volumes de dados.
                        </p>
                    </div>
                </div>
            </div>

            <div className="div-cards">
                <div className="div-solucao-completa">
                    <div className="foto-check">
                        <img src="/images/check.png" className="check" alt="check" />
                    </div>
                    <div className="titulo-solucao-completa">Solução Completa</div>
                    <div className="texto-solucao">
                        <p>
                            Realizamos uma consultoria completa de ponta a ponta trazendo soluções e desenvolvendo softwares focados no crescimento e em agregar valor a sua empresa
                        </p>
                    </div>
                </div>

                <div className="div-tecnologia">
                    <img src="/images/tecnologia.png" alt="tecnologia" className="tecnologia" />
                </div>
            </div>

            <div ref={caseDeSucessoRef} className="div-descricao">
                <div className="descricao">
                    <div className="fotos-logos">
                        <img src="/images/logo-rise-maior.png" className="logo-maior" alt="foto do logo" />
                        <img src="/images/logo-ong.png" className="logo-ong" alt="logo da ong" />
                        <img src="/images/linha.png" className="linha" alt="linha" />
                        <div className="descricao-case">
                            <div className="case-de-sucesso">Case de sucesso</div>
                            <p className="paragrafo-case-de-sucesso">
                                Trabalhamos juntamente ao Instituto A Corrente do Bem para mapear as áreas que mais precisam de apoio e compartilhar estas informações com as ONGs registradas.
                                Isso permite que as ONGs direcionem seus recursos de maneira mais eficaz, garantindo que a ajuda chegue a quem mais precisa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={nossaEquipeRef} className="gradiente">
                <div className="engloba-nossa-equipe">
                    <div className="nossa-equipe">
                        <div className="paragrafo-nossa-equipe">
                            <p className="estilo-paragrafo-nossa-equipe">Nossa equipe</p>
                        </div>

                        <div className="fotos-integrantes">
                            <img src="/images/yuzo.png" alt="Daniel Yuzo" />
                            <img src="/images/nicolas.png" alt="Nicolas Zanardi" />
                            <img src="/images/bifon.png" alt="Gabriel Bifon" />
                        </div>
                        <div className="descricao-participantes">
                            <div className="descricao-yuzo">
                                <p className="estilo-nome-meio">Daniel Yuzo</p>
                                <p>daniel.palma@sptech.school</p>
                            </div>
                            <div className="descricao-nicolas">
                                <p className="estilo-nome-meio">Nicolas Zanardi</p>
                                <p>nicolas.zanardi@sptech.school</p>
                            </div>
                            <div className="descricao-gabriel">
                                <p className="estilo-nome-meio">Gabriel Bifon</p>
                                <p>gabriel.bsouza@sptech.school</p>
                            </div>
                        </div>
                        <div className="fotos-integrantes">
                            <img src="/images/andrey.png" alt="Andrey Rodrigues" />
                            <img src="/images/ana.png" alt="Ana Bueno" />
                            <img src="/images/lucas.png" alt="Lucas Garcia" />
                        </div>
                        <div className="descricao-participantes">
                            <div className="descricao-andrey">
                                <p className="estilo-nome-meio">Andrey Rodrigues</p>
                                <p>andrey.rodrigues@sptech.school</p>
                            </div>
                            <div className="descricao-ana">
                                <p className="estilo-nome-meio">Ana Bueno</p>
                                <p>ana.bueno@sptech.school</p>
                            </div>
                            <div className="descricao-lucas">
                                <p className="estilo-nome-meio">Lucas Garcia</p>
                                <p>lucas.garcia@sptech.school</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={faleConoscoRef} className="formulario">
                <div className="retangulo-formulario">
                    <p className="entre-em-contato">Entre em contato</p>

                    <div className="dados">
                        <div className="dados-telefone">
                            <img src="/images/telefone.png" alt="telefone" />
                            <p className="estilo-dados">+55 11 944722626</p>
                        </div>

                        <div className="dados-email">
                            <img src="/images/email.png" alt="email" />
                            <p className="estilo-dados">rise@gmail.com</p>
                        </div>

                        <div className="dados-endereco">
                            <img src="/images/mapa.png" alt="mapa" />
                            <p className="estilo-dados">Rua Haddock Lobo n° 595</p>
                        </div>
                    </div>

                    <div className="esferas">
                        <img src="/images/bolaAmarelaComAzul.png" className="bola-azul" alt="bola azul" />
                    </div>
                </div>

                <div className="formulario-com-campos">
                    <div className="divAuxHorizontal">
                        <div className="form-control">
                            <input type="text" required />
                            <label>Nome:</label>
                        </div>
                        <div className="form-control">
                            <input type="text" required />
                            <label>Sobrenome:</label>
                        </div>
                    </div>

                    <div className="divAuxHorizontal">
                        <div className="form-control">
                            <input type="email" required />
                            <label>Email:</label>
                        </div>

                        <div className="form-control">
                            <input type="tel" required />
                            <label>Número de Telefone:</label>
                        </div>
                    </div>
                    <div className="form-control2">
                        <input type="text" id="inputDesc" required />
                        <label id="labelDesc">Descrição do Projeto:</label>
                    </div>
                    <div className="divButton">
                        <button className="custom-button">Enviar</button>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="logo-rise">
                    <img src="/images/logo-rise.png" className="rise" alt="logo Rise" />
                </div>
                <hr className="linha-branca-footer"></hr>
                <div className="grupo-de-informacoes">
                    <div className="info-container">
                        <div className="informacoes">
                            <p className="estilo-infos">Onde nos encontrar?</p>
                            <div className="dados-telefone">
                                <img src="/images/telefone.png" className="icon" alt="telefone" />
                                <p>+55 944722626</p>
                            </div>
                            <div className="dados-email">
                                <img src="/images/email.png" className="icon" alt="email" />
                                <p>rize@gmail.com</p>
                            </div>
                            <div className="dados-endereco">
                                <img src="/images/mapa.png" className="icon" alt="mapa" />
                                <p>Rua Haddock Lobo n° 595</p>
                            </div>
                        </div>
                        <div className="informacoes-dados">
                            <p className="estilo-infos">Menu</p>
                            <div className="frase-nosso-equipe" onClick={() => scrollToSection(nossaEquipeRef)}>
                                <p>Nossa Equipe</p>
                            </div>
                            <div className="frase-projetos" onClick={() => scrollToSection(servicosRef)}>
                                <p>Projetos</p>
                            </div>
                            <div className="frase-fale-conosco" onClick={() => scrollToSection(faleConoscoRef)}>
                                <p>Fale conosco</p>
                            </div>
                        </div>

                        <div class="logo-grande">
                            <img src="/images/logo-rise-canvas-grande.png" alt="logo maior" />
                        </div>

                        <div className="informacoes-dados">
                            <p className="estilo-infos">Acessos</p>
                            <div className="frase-nosso-equipe">
                                <p>SPTECH</p>
                            </div>
                            <div className="frase-projetos">
                                <p>A corrente do bem</p>
                            </div>
                            <div className="frase-fale-conosco">
                                <p>Github</p>
                            </div>
                        </div>
                        <div className="div-botao-fale-conosco">
                            <button className="botao-fale-conosco" onClick={() => scrollToSection(faleConoscoRef)}>
                                Fale Conosco
                                <img src="/images/seta preta.png" alt="seta preta" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
