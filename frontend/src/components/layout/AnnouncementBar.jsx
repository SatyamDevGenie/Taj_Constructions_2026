import { tickerMessages } from "../../data/navigation";

export default function AnnouncementBar() {
  const messages = [...tickerMessages, ...tickerMessages];

  return (
    <div className="bg-brand-gold overflow-hidden py-2.5">
      <div className="flex animate-marquee whitespace-nowrap">
        {messages.map((msg, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-8 text-brand-black text-xs sm:text-sm font-body font-semibold uppercase tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-black mr-4 flex-shrink-0" />
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
