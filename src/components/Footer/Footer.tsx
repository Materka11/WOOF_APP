"use client";

import dog from "../../../public/dog.svg";
import search from "../../../public/search.svg";

import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.scss";

import { useWindowInnerWidth } from "@/hooks/useWindowInnerWidth";
import { usePathname } from "next/navigation";

export default function Footer() {
  const innerWidth = useWindowInnerWidth();
  const pathname = usePathname();

  return (
    <footer
      className={`w-100 d-flex justify-content-center align-items-center gap-5 bg-yellow ${styles.footer}`}
    >
      <Link href={"/"} className={`z-2 ${styles.link}`} scroll={false}>
        <Image src={dog} alt="dog icon" width={innerWidth >= 768 ? 35 : 20} />
      </Link>
      <Link href={"/search"} className={`z-2 ${styles.link}`} scroll={false}>
        <Image
          src={search}
          alt="search icon"
          width={innerWidth >= 768 ? 35 : 20}
        />
      </Link>
      <span
        className={`bg-white roundend-50 z-1 ${styles.bgHover} ${
          pathname.startsWith("/search")
            ? styles.bgHoverSearch
            : styles.bgHoverHome
        }`}
      />
    </footer>
  );
}
