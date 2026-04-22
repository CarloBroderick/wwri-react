import { Link, Outlet } from "react-router-dom";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

function RedesignLayout() {
  return (
    <div
      id="public-website-redesign-layout"
      className="min-h-screen bg-neutral-50 text-neutral-900"
    >
      <header
        id="public-website-redesign-header"
        className="border-b border-neutral-200 bg-white px-6 py-4"
      >
        <nav
          id="public-website-redesign-nav"
          className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4"
        >
          <Link
            id="public-website-redesign-nav-home"
            to={REDESIGN_ROUTES.home}
            className="font-semibold tracking-tight text-neutral-900"
          >
            WWRI — redesign preview
          </Link>
          <Link
            id="public-website-redesign-nav-legacy"
            to="/"
            className="text-sm text-neutral-600 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-900"
          >
            Current live site
          </Link>
        </nav>
      </header>
      <main id="public-website-redesign-main" className="mx-auto max-w-5xl px-6 py-12">
        <Outlet />
      </main>
    </div>
  );
}

export default RedesignLayout;
