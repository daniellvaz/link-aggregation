import { Linkedin, Github, Instagram } from 'lucide-react';

import Container from '../components/container';

import Header from '../components/header';
import Content from '../components/content';
import LinkItem from '../components/linkItem';
import MoveUpIcon from '../components/moveUpIcon';

export default function Index() {
  return (
    <Container>
      <Header />
      <Content>
        <LinkItem
          title="LinkedIn"
          href="https://www.linkedin.com/in/daniel-murilo-vaz"
          icon={Linkedin}
        />
        <LinkItem
          title="Github"
          href="https://github.com/daniellvaz"
          icon={Github}
        />
        <LinkItem
          title="Instagram"
          href="https://www.instagram.com/daniellmurilo"
          icon={Instagram}
        />
        <LinkItem 
          title="Moveup Tecnologia" 
          href="https://moveuptech.com.br" 
          icon={MoveUpIcon}
        />
      </Content>
    </Container>
  );
}
