import { Clock, MapPin, Phone, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { CONTACT } from "@/lib/site";

const ITEMS = [
  {
    icon: MapPin,
    label: "Atendimento local",
    value: "Boa Vista, Recife",
  },
  {
    icon: ShieldCheck,
    label: "Abordagem",
    value: "Avaliação individualizada",
  },
  {
    icon: Clock,
    label: "Horários",
    value: "Seg-sex e sábados",
  },
  {
    icon: Phone,
    label: "Contato",
    value: "WhatsApp e telefone no final",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-mist/80 px-6 lg:px-10" aria-label="Informações de confiança">
      <div className="mx-auto grid max-w-7xl gap-3 border-y border-softgray/70 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3 rounded-xl bg-white/65 px-4 py-3">
            <Icon size={24} weight="thin" color="#087BB8" className="shrink-0" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky">
                {label}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-dna">{value}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="sr-only">{CONTACT.areaServed}</p>
    </section>
  );
}
