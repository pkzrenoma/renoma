import {
  Microscope,
  FlaskRoundIcon as Flask,
  Droplet,
  Building,
} from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Badania materiałów budowlanych",
    description:
      "Analiza makroskopowa, mikroskopowa, chemiczna, badanie właściwości kapilarnych i wytrzymałości mechanicznej.",
  },
  {
    icon: Droplet,
    title: "Badania warstw barwnych",
    description:
      "Stratygrafia warstw, identyfikacja pigmentów, barwników i spoiw.",
  },
  {
    icon: Flask,
    title: "Badanie zasolenia",
    description:
      "Analiza ilościowa i jakościowa, określenie stopnia i rozkładu zasolenia.",
  },
  {
    icon: Microscope,
    title: "Badanie zawilgocenia",
    description:
      "Określenie stopnia i rozkładu zawilgocenia oraz przyczyn jego występowania.",
  },
];

export default function RenomaLab() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-zinc-900">
            LABORATORIUM RENOMA LAB
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">O LABORATORIUM</h2>
              <p className="mb-4 text-zinc-700">
                RenomaLAB powstało z myślą o badaniach wykonywanych na potrzeby
                konserwatorów dzieł sztuki, muzealników, kolekcjonerów oraz
                architektów i projektantów. Laboratorium specjalizuje się w
                badaniach konserwatorskich, dzięki którym możliwa jest ocena
                stanu zachowania zabytku i przyczyn jego niszczenia będąca
                podstawą do prawidłowego przygotowania programu prac
                konserwatorskich.
              </p>
              <p className="text-zinc-700">
                Prowadzone przez nas analizy materiałowe pozwalają na określenie
                budowy, składu i właściwości oryginalnych oraz wtórnych
                materiałów występujących w zabytku, a także zastosowanych
                technik i technologii. Wykonujemy kompleksowe badania
                oryginalnego wystroju wnętrz, dekoracji malarskich, stolarki
                architektonicznej. Dzięki uzyskanym wynikom badań możliwe jest
                opracowanie metod i dobranie odpowiednich materiałów stosowanych
                w trakcie prac konserwatorskich i restauratorskich.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-semibold">OFERTA</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {services.map((service, index) => (
                  <div key={index} className="rounded-lg bg-white p-6 shadow">
                    <div className="mb-4 flex items-center">
                      <service.icon className="mr-2 h-6 w-6 text-blue-500" />
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-zinc-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <p className="text-zinc-700">
                Stale współpracujemy ze specjalistami przeprowadzającymi badania
                instrumentalne komplementarne z analizami wykonanymi w
                laboratorium własnym (m. in. analiza petrograficzna, badania
                mikrobiologiczne).
              </p>
            </section>
          </div>
        </div>
      </main>
      <footer className="mt-8 bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-zinc-500">
            © 2023 LABORATORIUM RENOMA LAB. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
}
