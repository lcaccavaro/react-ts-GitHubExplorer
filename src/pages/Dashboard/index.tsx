import React from 'react';
import { FiChevronRight } from 'react-icons/fi'
import { Title, Form, Repositories } from './style';

import LogoSvg from '../../assets/Logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoSvg} />
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href='test'>
          <img
            src='https://avatars1.githubusercontent.com/u/40892464?s=460&u=4b21e0779f183df367942e0f232c2f4c3c40d2e6&v=4'
            alt='Lucas Caccavaro'
          />
          <div>
            <strong>lcaccavaro/node-ts-appointmentsApi</strong>
            <p>Node Typescript - Appointments API - Basic Node concepts for API and Unit tests. Typescript and TypeORM</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='test'>
          <img
            src='https://avatars1.githubusercontent.com/u/40892464?s=460&u=4b21e0779f183df367942e0f232c2f4c3c40d2e6&v=4'
            alt='Lucas Caccavaro'
          />
          <div>
            <strong>lcaccavaro/node-ts-appointmentsApi</strong>
            <p>Node Typescript - Appointments API - Basic Node concepts for API and Unit tests. Typescript and TypeORM</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='test'>
          <img
            src='https://avatars1.githubusercontent.com/u/40892464?s=460&u=4b21e0779f183df367942e0f232c2f4c3c40d2e6&v=4'
            alt='Lucas Caccavaro'
          />
          <div>
            <strong>lcaccavaro/node-ts-appointmentsApi</strong>
            <p>Node Typescript - Appointments API - Basic Node concepts for API and Unit tests. Typescript and TypeORM</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;