import { BS_Spinner } from "@/components/boostrap/boostrap";

export default function loadingHome() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }} // jest tu inline style poniewaz wczytuje sie on razem z strona, a gdybym dal tu styl przez plik height wczytal by sie po chwili a nie odrazu
    >
      <BS_Spinner />
    </div>
  );
}
