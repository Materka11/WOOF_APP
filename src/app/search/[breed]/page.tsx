import { getImageByBreed } from "@/lib/getImageByBreed/getImageByBreed";

import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params: { breed },
}: BreedProps): Promise<Metadata> {
  return {
    title: `WOOF APP | ${breed.toUpperCase()}`,
  };
}

export default async function Breed({ params: { breed } }: BreedProps) {
  const { message } = await getImageByBreed(breed);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column container-page">
      <Image
        src={message}
        alt="dog image"
        width={300}
        height={300}
        objectFit="cover"
        className="my-5 roundend-50"
      />
      <section className="w-100">
        <h2 className="mb-5 text-capitalize">{breed}</h2>
        <p className="text-grey text">
          Psy, nazywane najlepszymi przyjaciółmi człowieka, są jednymi z
          najbardziej popularnych i ukochanych zwierząt na świecie. Są one
          inteligentne, oddane i pełne miłości. Poniżej przedstawiam informacje
          na temat psów: Psy należą do gatunku Canis lupus familiaris i są
          ssakami z rodziny psowatych. Są potomkami dzikich wilków i były
          udomowione przez człowieka od tysięcy lat. Istnieje wiele różnych ras
          psów, które różnią się rozmiarem, wyglądem, osobowością i cechami.
          Pierwsze rasy psów pojawiły się setki lat temu. Niektóre z
          najstarszych ras, takie jak Chart afgański i Saluki, mają historyczne
          korzenie sięgające tysiącleci. Obecnie istnieje ponad 300 różnych ras
          psów, z których każda ma swoje unikalne cechy i temperament. Psy są
          znane ze swojej inteligencji. Są w stanie szybko się uczyć i są często
          szkolone do wykonywania różnych zadań. Dlatego są wykorzystywane w
          wielu służbach, takich jak policyjne, wojskowe, przewodnictwo dla osób
          niewidomych, ratownictwo czy terapia. Każda rasa psa ma swoje
          charakterystyczne cechy fizyczne i temperament. Niektóre rasy, takie
          jak Border Collie, są bardzo energiczne i inteligentne, a więc
          wymagają dużej ilości aktywności fizycznej i umysłowej. Inne rasy,
          takie jak Basset Hound, są bardziej spokojne i mają tendencję do bycia
          bardziej niezależnymi. Psy są również zróżnicowane pod względem
          wielkości. Są ogromne rasy, takie jak Dog niemiecki, które osiągają
          imponujące rozmiary, oraz małe rasy, takie jak Chihuahua, które są
          delikatne i niewielkie. Opieka nad psem wymaga zaangażowania i
          odpowiedzialności. Psy potrzebują codziennych spacerów, aktywności
          fizycznej, odpowiedniej diety i opieki weterynaryjnej. Dodatkowo,
          ważne jest budowanie więzi emocjonalnej i zapewnienie im miłości i
          uwagi. Psy są zwierzętami stadnymi i lubią towarzystwo. Często tworzą
          silne więzi z właścicielami i stają się członkami rodziny. Zazwyczaj
          są wierni i oddani, gotowi bronić swoich bliskich w razie potrzeby.
          Warto również wspomnieć, że psy mają różne szczekające dźwięki, które
          wykorzystują do komunikacji z ludźmi i innymi psami. Potrafią także
          wyrażać swoje emocje za pomocą gestów i wyrazu twarzy. Wiele osób
          adoptuje psy z schronisk i organizacji charytatywnych, aby dać im
          drugą szansę i zapewnić im kochający dom. To ważne działanie, ponieważ
          pomaga zmniejszyć liczbę bezdomnych psów i daje im lepsze życie.
          Podsumowując, psy są niezwykle wszechstronnymi zwierzętami, które
          przynoszą radość i miłość do życia wielu ludzi. Są one nie tylko
          urocze i zabawne, ale także oferują bezwarunkową miłość i lojalność.
          Każda rasa psa ma swoje wyjątkowe cechy, ale wspólna jest miłość,
          którą dzielą z ludźmi.
        </p>
      </section>
    </div>
  );
}
