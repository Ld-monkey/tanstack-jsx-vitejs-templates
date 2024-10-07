import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexFileRoot,
});

function IndexFileRoot() {
  return (
    <div>
      <p>Basic Tanstack Template</p>
      <ul className="list-disc list-inside">
        <li>TanStack Router</li>
        <li>TanStack Router devtools</li>
        <li>Tailwindcss</li>
      </ul>
    </div>
  );
}
