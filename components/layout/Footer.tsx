interface FooterProps {
  t: {
    rights: string;
  };
}

export default function Footer({ t }: FooterProps) {
  return (
    <div className="w-full text-center py-4 bg-faf0ca">
      Rima Nafougui | {t.rights} &copy; 2025
    </div>
  );
}
