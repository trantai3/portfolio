import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface RepoStats {
  stargazers_count: number;
  forks_count: number;
}

const Footer = () => {
  const [stats, setStats] = useState<RepoStats>({
    stargazers_count: 0,
    forks_count: 0,
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/tajmirul/portfolio-2.0')
      .then((res) => res.json())
      .then((data: RepoStats) => {
        setStats({
          stargazers_count: data.stargazers_count || 0,
          forks_count: data.forks_count || 0,
        });
      })
      .catch(() => {
        // Silently fail, keep defaults
      });
  }, []);

  return (
    <footer className="text-center pb-5" id="contact">
      <div className="container">
        <p className="text-lg">Have a project in mind?</p>
        <a
          href={`mailto:${GENERAL_INFO.email}`}
          className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
        >
          {GENERAL_INFO.email}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
