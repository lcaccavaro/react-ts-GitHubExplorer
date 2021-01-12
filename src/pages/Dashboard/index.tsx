import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi'
import { Title, Form, Repositories } from './style';

import LogoSvg from '../../assets/Logo.svg';

import { Api } from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {

  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleRepositories(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await Api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={LogoSvg} />
      <Title>Explore repositórios no Github.</Title>
      <Form onSubmit={handleRepositories}>
        <input placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href='test'>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;