import Image from "next/image";
import MobileNavigation from "@/components/patterns/mobile-navigation";
import { withBasePath } from "@/lib/paths";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-brand" href="#top" aria-label="Paula Riquelme home">
        <Image
          src={withBasePath("/brand/pr-monogram.svg")}
          alt=""
          width={32}
          height={32}
        />
        <span>Paula Riquelme</span>
      </a>
      <nav className="desktop-navigation" aria-label="Primary navigation">
        <a href="#work">Selected work</a>
        <a href="#experience">Experience</a>
        <a href="#recognition">Recognition</a>
        <a
          href={withBasePath("/documents/paula-riquelme-resume-en.pdf")}
          download
        >
          English resume
        </a>
        <a href="#contact">Contact</a>
      </nav>
      <MobileNavigation />
    </header>
  );
}
