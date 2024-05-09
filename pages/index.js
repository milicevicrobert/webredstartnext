// pages/index.js
import Link from "next/link";

function Home() {
  return (
    <div>
      <div className="bg-blue-800 text-white text-center p-12">
        <h1 className="text-4xl font-bold animate-pulse">
          Dobrodošli u Redstart d.o.o.
        </h1>
        <p className="text-xl mt-2 opacity-75 hover:opacity-100 transition-opacity duration-300">
          Inovacije i tehnologija za vaš poslovni uspjeh.
        </p>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-center">Naše Usluge</h2>
        <div className="flex justify-around flex-wrap mt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg p-4 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-200 p-8 text-center">
        <h2 className="text-3xl font-bold scale-100 hover:scale-105 transition-all duration-300">
          Zašto odabrati nas?
        </h2>
        <p className="mt-2">
          Jer smo predani kvaliteti, inovaciji i izvrsnosti u svakom projektu.
        </p>
      </div>
    </div>
  );
}

export default Home;

const services = [
  {
    title: "Web Razvoj",
    description:
      "Kreiramo moderna i responzivna web rješenja prilagođena vašim potrebama.",
  },
  {
    title: "Digitalni Marketing",
    description:
      "Optimizacija za tražilice, kampanje na društvenim mrežama i više.",
  },
  {
    title: "IT Konzalting",
    description:
      "Prilagođena rješenja za unapređenje vašeg poslovanja kroz tehnologiju.",
  },
];
