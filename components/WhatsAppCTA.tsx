import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { whatsappUrl } from "@/lib/site";

type WhatsAppCTAProps = {
  label: string;
  message: string;
  className?: string;
  align?: "left" | "center";
  variant?: "primary" | "light" | "outlineDark";
};

export default function WhatsAppCTA({
  label,
  message,
  className = "",
  align = "left",
  variant = "primary",
}: WhatsAppCTAProps) {
  const buttonClass =
    variant === "light"
      ? "bg-white text-nutrigen hover:scale-[1.02]"
      : variant === "outlineDark"
        ? "border border-mist/30 text-mist hover:border-cyan hover:text-cyan"
        : "bg-cyan text-white hover:scale-[1.02]";

  return (
    <div
      className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start"} ${className}`}
    >
      <a
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-4 text-[13px] font-bold uppercase tracking-[0.06em] shadow-float transition-transform sm:w-auto ${buttonClass}`}
      >
        {label}
        <ArrowRight size={19} weight="bold" />
      </a>
    </div>
  );
}
