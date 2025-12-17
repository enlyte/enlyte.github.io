export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Stephen Moy. Crafted as a living lab.</p>
      </div>
    </footer>
  );
}
