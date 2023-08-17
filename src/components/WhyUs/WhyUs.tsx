import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faSmile,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyUs() {
  return (
    <div className="max-w-screen-xl p-8 mx-auto text-center mb-8">
      <h2 className="mb-4">Dlaczego my?</h2>
      <div className="flex justify-center">
        <div className="flex flex-col items-center m-4">
          <FontAwesomeIcon className="h-36 mb-4" icon={faCalendarAlt} />
          <p className="text-xl font-semibold">32 Lata</p>
          <p className="text-sm">doświadczenia</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <FontAwesomeIcon className="h-36 mb-4" icon={faSmile} />
          <p className="text-xl font-semibold">Ponad 10 tysięcy</p>
          <p className="text-sm">Zadowolonych klientów</p>
        </div>
      </div>
    </div>
  );
}
