import { Container, Icons } from "./styled";
import logo from "../../img/eu.png";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.svg.png";

const Footer = () => {
  return (
    <Container>
      <img src={logo} />
      <Icons>
        <h1>Desenvolvido por: Gabriel Veloso</h1>
        <div>
          <a href="https://github.com/gaaveloso" target='_blank'>
            <img src={github} />
          </a>
          <a href="https://www.linkedin.com/in/gaveloso/" target='_blank'>
            <img src={linkedin} />
          </a>
        </div>
        <p>Todos os direitos reservados.</p>
      </Icons>
    </Container>
  );
};

export default Footer;