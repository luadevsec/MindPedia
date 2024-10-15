// Links.tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
  background-color: #f4f4f4;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #333;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 12px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;

  a {
    text-decoration: none;
    color: #007bff;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
      text-decoration: underline;
    }
  }
`;

const Links: React.FC = () => {
  const list = [
    { title: 'Home Page', url: '/' },
    { title: 'Atendimento', url: '/atendimento' },
    { title: 'Ficha', url: '/ficha' },
    { title: 'Menu', url: '/menu' },
    { title: 'Cadastro', url: '/cadastro' },
  ];

  return (
    <Container>
      <Title>Links Úteis</Title>
      <List>
        {list.map((item, index) => (
          <ListItem key={index}>
            <a href={item.url}>{item.title}</a>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Links;
