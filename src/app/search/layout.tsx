import { BS_Container } from "@/components/boostrap/boostrap";

import SearchBar from "@/components/SearchBar/SearchBar";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SearchBar />
      <BS_Container>{children}</BS_Container>
    </>
  );
}
