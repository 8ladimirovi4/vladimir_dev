/** @layer shared / slice ui — light section atmosphere (hero-like) */

export function SectionGlow() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-background to-blue-500/5 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none"
      />
    </>
  );
}
