import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <nav>
          <Link to="/" className="text-[#0000ee] underline">
            Root
          </Link>
        </nav>
        <main>
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
