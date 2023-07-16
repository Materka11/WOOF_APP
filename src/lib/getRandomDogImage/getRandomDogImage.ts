export async function getRandomDogImage() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");

  if (!res.ok) {
    throw new Error("Failed to fetch random dog image");
  }

  return res.json() as Promise<RandomDogImageData>; // przypisanie typu dla wygodniejszego dzialania na danych
}
