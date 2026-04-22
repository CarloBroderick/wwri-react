import { Link } from "react-router-dom";

type Props = {
  id: string;
  to: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
};

/** Pill-shaped call-to-action used on hero / section CTAs. */
function CTAButton({ id, to, children, variant = "solid" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wide transition-colors";
  const styles =
    variant === "solid"
      ? "bg-[#a5be6c] text-[#22402c] hover:bg-[#b7cf7d]"
      : "border-2 border-[#a5be6c] text-[#a5be6c] hover:bg-[#a5be6c] hover:text-[#22402c]";
  return (
    <Link id={id} to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export default CTAButton;
