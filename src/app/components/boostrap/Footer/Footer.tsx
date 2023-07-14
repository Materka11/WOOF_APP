"use client";

import dog from "../../../../../public/dog.svg";
import search from "../../../../../public/search.svg";

import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer
      className={`fixed-bottom w-100 d-flex justify-content-center align-items-center gap-5 ${styles.footer}`}
    >
      <Link href={"/"}>
        <Image src={dog} alt="dog icon" width={35} />
      </Link>
      <Link href={"/search"}>
        <Image src={search} alt="search icon" width={35} />
      </Link>
    </footer>
  );
}
