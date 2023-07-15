export async function getAllDogs() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");

  if (!res.ok) {
    throw new Error("Failed to fetch all dogs");
  }

  return res.json() as Promise<DogData>; // przypisanie typu dla wygodniejszego dzialania na danych
}
