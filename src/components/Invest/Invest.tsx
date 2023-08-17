import data from "@/staticData/whyUs.json";
import Card from "../Card/Card";

const Invest = () => {
  return (
    <div className=" bg-additional">
      <div className="max-w-screen-xl p-4 mx-auto text-center">
        <h2 className="mb-4">Dlaczego warto zainwestować?</h2>
        <div className="flex justify-center items-center flex-col lg:flex-row">
          {data.map((item, index) => (
            <Card
              key={index}
              header={item.header}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invest;
