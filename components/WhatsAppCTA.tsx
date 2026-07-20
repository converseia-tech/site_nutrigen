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
      ? "bg-white text-dna hover:scale-[1.02]"
      : variant === "outlineDark"
        ? "border border-mist/30 text-mist hover:border-cyan hover:text-cyan"
        : "bg-gradient-to-r from-dna to-nutrigen text-white hover:from-nutrigen hover:to-cyan hover:scale-[1.02]";

  return (
    <div
      className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start"} ${className}`}
    >
      <a
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.02em] shadow-float transition-transform sm:w-auto sm:gap-3 sm:px-7 sm:py-4 sm:text-[13px] sm:tracking-[0.06em] ${buttonClass}`}
      >
        {label}
        <ArrowRight size={19} weight="bold" />
      </a>
    </div>
  );
}
