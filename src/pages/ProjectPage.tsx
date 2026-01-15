import { useParams, Navigate } from 'react-router-dom';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/sections/ProjectDetails';

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  useDocumentMeta({
    title: project
      ? `${project.title} - ${project.techStack.slice(0, 3).join(', ')}`
      : '404 - Not Found',
    description: project?.description,
  });

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return <ProjectDetails project={project} />;
}
