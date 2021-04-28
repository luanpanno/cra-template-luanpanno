import { Container } from './styles';

export const Home = () => {
  return (
    <Container>
      <p>Custom CRA</p>
      <span>by Luan Panno :)</span>
      <a
        href="https://github.com/luanpanno/cra-template-luanpanno"
        target="_BLANK"
        rel="noreferrer"
      >
        Check Repository
        <img
          src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_black_192x192.png"
          alt="arrow-right-icon"
        />
      </a>
    </Container>
  );
};
