import dogImage from "../../../public/dogImage.jpg";

import Image from "next/image";

export default function Search() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <Image
        src={dogImage}
        alt="dog image"
        width={300}
        className="my-5 roundend-50"
      />
      <p className="text-center text-grey">
        Here we will display information about your interesting pet
      </p>
    </div>
  );
}
