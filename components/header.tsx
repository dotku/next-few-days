import { subtitle, title } from "./primitives";

export default function Header() {
  return (
    <div className="inline-block max-w-xl text-center justify-center">
      <span className={title()}>Make&nbsp;</span>
      <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
      <br />
      <span className={title()}>
        websites regardless of your design experience.
      </span>
      <div className={subtitle({ class: "mt-4" })}>
        Beautiful, fast and modern React UI library.
      </div>
    </div>
  );
}
