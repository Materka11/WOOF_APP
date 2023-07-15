import { getAllDogs } from "@/lib/getAlldog/getAllDogs";

import { BS_Container, BS_Row, BS_Col } from "../components/boostrap/boostrap";

import Link from "next/link";

export default async function Home() {
  const allDogs = await getAllDogs();

  const allDogsEntries = Object.entries(allDogs.message).map(
    (breed) => breed[0]
    //wyciagniecie tylko znaczacych ras psow bez ich pod kategorii
  );

  return (
    <div className="ms-4 container-page">
      <h2 className="mb-5">Dog breed list</h2>
      <BS_Row className="row-cols-1 row-cols-sm-3 row-cols-lg-5">
        {allDogsEntries.map((breed) => (
          <BS_Col className="my-2" key={breed}>
            <Link
              className="text-decoration-none text-white-50"
              href={`/search/${breed}`}
            >
              {breed}
            </Link>
          </BS_Col>
        ))}
      </BS_Row>
    </div>
  );
}
