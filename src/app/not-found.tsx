"use client";

import { BS_Button, BS_Container } from "@/components/boostrap/boostrap";

import styles from "./home.module.scss";

import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <body className="bg-dark">
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <p className="text-center text-white text-uppercase">
          We couldn&apos;t find such a page
        </p>
        <div className="d-flex gap-4">
          <BS_Button
            className={`mt-3 ${styles.btnPrimary}`}
            onClick={() => router.push("/")}
          >
            Home
          </BS_Button>
          <BS_Button
            className={`mt-3 ${styles.btnPrimary}`}
            onClick={() => router.push("/search/")}
          >
            Search
          </BS_Button>
        </div>
      </div>
    </body>
  );
}
