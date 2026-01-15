import { Link } from 'react-router-dom';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function NotFoundPage() {
  useDocumentMeta({ title: '404 - Page Not Found' });

  return (
    <div className="container h-[80svh] flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-anton text-primary mb-4">404</h1>
      <p className="text-2xl text-muted-foreground mb-8">
        Page not found
      </p>
      <Link
        to="/"
        className="text-lg text-primary hover:underline font-anton uppercase tracking-widest"
      >
        Go back home
      </Link>
    </div>
  );
}
