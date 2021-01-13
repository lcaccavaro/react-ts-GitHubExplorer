import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import LogoSvg from '../../assets/Logo.svg';

import { Header, Issues, RepositoryInfo } from './style';
import { Api } from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface IRepository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<IRepository | null>(null);
  const [issues, setIssues] = useState<IIssue[]>([]);

  useEffect(() => {
    loadData();
  }, [params.repository]);

  async function loadData() {
    const [repository, issues] = await Promise.all([
      Api.get(`repos/${params.repository}`),
      Api.get(`repos/${params.repository}/issues`)
    ]);

    setRepository(repository.data);
    setIssues(issues.data);
  }

  return (
    <>
      <Header>
        <img src={LogoSvg} alt='GitHub Explorer' />
        <Link to='/'>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      { repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count ? repository.stargazers_count : 0}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count ? repository.forks_count : 0}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count ? repository.open_issues_count : 0}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url} target='_blank'>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
}

export default Repository;