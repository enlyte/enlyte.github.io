export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/[0.03] px-6 py-16 sm:px-10">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Work With Stephen</p>
          <h2 className="text-3xl font-semibold text-white">AI media, infrastructure-heavy products, intentional UX.</h2>
          <p className="text-base text-slate-300">
            Open to founding partnerships, Head-of-Engineering roles, and consulting for AI tools in media, automation, or
            research-heavy products.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <form
            className="space-y-4"
            method="post"
            action="https://example.com/contact"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="text-sm text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-accent-ai focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-accent-ai focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-accent-ai focus:outline-none"
              />
            </div>
            <fieldset className="rounded-2xl border border-white/10 p-4">
              <legend className="text-xs uppercase tracking-[0.3em] text-slate-400">Topics</legend>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-200">
                {["Consulting", "Collaboration", "Full-time role", "Other"].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input type="checkbox" name="interest" value={item} className="h-4 w-4 rounded border-white/30 bg-transparent" />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>
            <button
              type="submit"
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-accent-ai hover:bg-accent-ai/10"
            >
              Send Message
            </button>
          </form>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/40 p-6">
            <p className="text-sm text-slate-200">
              Prefer email?
              <br />
              <a href="mailto:hello@stephenmoy.com" className="font-semibold text-white underline-offset-4 hover:underline">
                hello@stephenmoy.com
              </a>
            </p>
            <div className="space-y-1 text-sm text-slate-300">
              <p>Signals I respond to quickly:</p>
              <ul className="space-y-1 text-slate-200">
                <li>• AI tooling for media / automation.</li>
                <li>• Infra-heavy products needing UX translation.</li>
                <li>• Leadership roles bridging product + engineering.</li>
              </ul>
            </div>
            <div className="space-y-3 text-sm text-slate-200">
              <p>Elsewhere</p>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/stephenmoy" className="text-accent-ai underline-offset-4 hover:underline">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/stephen-moy" className="text-accent-ai underline-offset-4 hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/stephenmoy" className="text-accent-ai underline-offset-4 hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
