import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import Banner from '@/components/sections/Banner';
import AboutMe from '@/components/sections/AboutMe';
import Skills from '@/components/sections/Skills';
import Experiences from '@/components/sections/Experiences';
import ProjectList from '@/components/sections/ProjectList';

export default function HomePage() {
  useDocumentMeta({
    title: 'Portfolio - Andrew Tran',
    description: 'Personal portfolio of Andrew Tran',
  });

  return (
    <div>
      <Banner />
      <AboutMe />
      <Skills />
      <Experiences />
      <ProjectList />
    </div>
  );
}
