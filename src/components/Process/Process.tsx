import data from "@/staticData/process.json";
import {
  faTape,
  faTags,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

export default function Process() {
  const icons = [faTape, faTags, faScrewdriverWrench];

  return (
    <div className="max-w-screen-xl p-4 mx-auto text-center">
      <h2>Proces</h2>
      <div className="flex justify-center items-center flex-col lg:flex-row">
        {data.map((item, index) => (
          <Card
            key={index}
            header={item.header}
            description={item.description}
            icon={icons[index]}
          />
        ))}
      </div>
    </div>
  );
}
