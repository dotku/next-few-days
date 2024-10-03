import { Link } from "@nextui-org/link";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <Link
        isExternal
        className="flex items-center gap-1 text-current text-xs"
        href="/"
        title="next few days homepage"
      >
        <span className="text-default-600">Powered by</span>
        <p className="text-primary">next few days</p>
      </Link>
    </footer>
  );
}
