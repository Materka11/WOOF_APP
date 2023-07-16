export async function getImageByBreed(breed: string) {
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);

  if (!res.ok) {
    throw new Error("Failed to fetch image dog");
  }

  return res.json() as Promise<DogImageData>; // przypisanie typu dla wygodniejszego dzialania na danych
}
