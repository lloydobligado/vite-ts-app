import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/home')({
  component: HomePage,
});

function HomePage() {
  return <main className="p-2">This is home page</main>;
}
