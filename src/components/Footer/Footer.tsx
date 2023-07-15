"use client";

import dog from "../../../public/dog.svg";
import search from "../../../public/search.svg";

import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.scss";

import { useWindowInnerWidth } from "@/hooks/useWindowInnerWidth";

export default function Footer() {
  const innerWidth = useWindowInnerWidth();

  return (
    <footer
      className={`w-100 d-flex justify-content-center align-items-center gap-5 bg-yellow ${styles.footer}`}
    >
      <Link href={"/"}>
        <Image src={dog} alt="dog icon" width={innerWidth >= 768 ? 35 : 20} />
      </Link>
      <Link href={"/search"}>
        <Image
          src={search}
          alt="search icon"
          width={innerWidth >= 768 ? 35 : 20}
        />
      </Link>
    </footer>
  );
}
