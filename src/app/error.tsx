"use client";

import { BS_Button } from "@/components/boostrap/boostrap";

import styles from "./home.module.scss";

export default function ErrorPage() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <p className="text-center text-white text-uppercase">
        Something went wrong
      </p>
      <BS_Button
        className={`mt-3 ${styles.btnPrimary}`}
        onClick={() => location.reload()}
      >
        Refresh Page
      </BS_Button>
    </div>
  );
}
