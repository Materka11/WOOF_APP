"use client";

import dog from "../../../public/dog.svg";

import Image from "next/image";

import styles from "./search.module.scss";

export default function ErrorBreed() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div
        className={`roundend-50 bg-grey my-5 d-flex justify-content-center align-items-center ${styles.bgImage}`}
      >
        <Image src={dog} alt="error image" width={100} />
      </div>
      <p className="text-center text-grey">
        Ajajaja! This breed is not yet in our database. Look for another one
      </p>
    </div>
  );
}
