function RedesignHomePage() {
  return (
    <div id="public-website-redesign-home" className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Redesign workspace</h1>
      <p className="max-w-2xl text-neutral-600">
        New pages and components for the Canva-driven site refresh belong in{" "}
        <code className="rounded bg-neutral-200 px-1.5 py-0.5 text-sm text-neutral-800">
          src/apps/public-website-redesign/
        </code>
        . Bundled media can start in{" "}
        <code className="rounded bg-neutral-200 px-1.5 py-0.5 text-sm text-neutral-800">
          src/assets/public-website-redesign/
        </code>{" "}
        and be imported from this app.
      </p>
      <p className="text-sm text-neutral-500">
        The previous production implementation remains in{" "}
        <code className="rounded bg-neutral-100 px-1 py-0.5 text-neutral-700">
          src/apps/public-website-legacy/
        </code>{" "}
        at the same public URLs as before.
      </p>
    </div>
  );
}

export default RedesignHomePage;
