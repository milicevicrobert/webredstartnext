// pages/about.js
function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">O nama</h1>
      <p className="text-lg text-gray-700">
        Redstart d.o.o. je tehnološka kompanija osnovana 2010. godine s misijom
        da pruži inovativna rješenja koja pomažu poduzećima da efikasnije
        posluju. Naša vizija je biti vodeći pružatelj IT usluga i proizvoda u
        regiji.
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Naš Tim</h2>
        <p className="text-gray-600 mt-2">
          Naš tim se sastoji od više od 50 stručnjaka iz različitih područja
          tehnologije, dizajna i poslovanja.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Zašto odabrati nas?</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Visokokvalitetna rješenja prilagođena vašim potrebama</li>
          <li>Posvećenost inovacijama i kontinuiranom usavršavanju</li>
          <li>Orijentirani smo na klijente i njihovo zadovoljstvo</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
