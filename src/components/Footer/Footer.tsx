import data from "@/staticData/companyInfo.json";

export default function Footer() {
  return (
    <div className="w-full bg-primary text-white">
      <div className="container p-8 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Kontakt</h3>
            <p className="mb-2">
              E-mail:{" "}
              <a href={`mailto:${data.email}`} className="underline">
                {data.email}
              </a>
            </p>
            <p>Telefon:</p>
            <ul className="list-disc pl-5">
              {data.phoneNumbers.map((phone, index) => (
                <li key={index}>
                  <a href={`tel:${phone}`} className="underline">
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Adres</h3>
            <p>{data.address}</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Informacje o firmie</h3>
            <p className="mb-2">
              Nazwa firmy:
              <span className="uppercase">{data.fullCompanyName}</span>
            </p>
            <p className="mb-2">NIP: {data.nip}</p>
            <p>REGON: {data.regon}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
