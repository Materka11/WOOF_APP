"use client";

import {
  BS_Button,
  BS_Form,
  BS_FormControl,
  BS_InputGroup,
} from "@/components/boostrap/boostrap";

import styles from "./searchBar.module.scss";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      query: "",
    },
  });

  const onSubmit = ({ query }: { query: string }) => {
    router.push(`search/${query}`);
  };
  return (
    <BS_Form onSubmit={handleSubmit(onSubmit)}>
      <BS_InputGroup>
        <BS_FormControl
          type="text"
          className={`bg-dark text-white shadow-none ${styles.searchBar}`}
          placeholder="Enter the breed"
          aria-label="Search"
          aria-describedby="search-addon"
          {...register("query")}
        />

        <BS_Button type="submit" className={styles.btnPrimary}>
          Search
        </BS_Button>
      </BS_InputGroup>
    </BS_Form>
  );
}
