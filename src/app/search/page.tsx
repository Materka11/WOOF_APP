import { getRandomDogImage } from "@/lib/getRandomDogImage/getRandomDogImage";

import Image from "next/image";

export default async function Search() {
  const { message } = await getRandomDogImage();

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <Image
        src={message}
        alt="dog image"
        width={250}
        height={250}
        objectFit="cover"
        className="my-5 roundend-50"
      />
      <p className="text-center text-grey">
        Here we will display information about your interesting pet
      </p>
    </div>
  );
}
