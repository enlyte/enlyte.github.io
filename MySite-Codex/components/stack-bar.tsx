const stackItems = [
  "Python",
  "Flask",
  "PySide6",
  "React",
  "Remix",
  "Tailwind",
  "Docker",
  "Nginx",
  "MongoDB",
  "FFmpeg",
  "Whisper",
  "pfSense",
  "Protectli",
  "Raspberry Pi",
  "Final Cut Pro",
];

export function StackBar() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03]">
      <div className="stack-marquee flex gap-8 whitespace-nowrap py-3 text-sm font-mono uppercase tracking-[0.3em] text-slate-300">
        {[...stackItems, ...stackItems].map((item, idx) => (
          <span key={`${item}-${idx}`} className="flex items-center gap-2 pl-8">
            <span className="h-[5px] w-[5px] rounded-full bg-accent-ai/80" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
