import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: AuthPage,
});

function AuthPage() {
  function testFunc() {
    return 'func';
  }

  testFunc();

  return (
    <div className="p-2">
      <h3>This is login page</h3>
    </div>
  );
}
