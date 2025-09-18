interface FooterProps {
  t: {
    rights: string;
  };
}

export default function Footer({ t }: FooterProps) {
  return (
    <div className="w-full text-center py-4 bg-white">
      Rima Nafougui | {t.rights} &copy; 2025
    </div>
  );
}
