import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faSmile,
  faThumbsUp,
  faUsers,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyUs() {
  return (
    <div className="container p-8 mx-auto text-center mb-8">
      <h2 className="text-3xl font-bold mb-8">Dlaczego my?</h2>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center m-4">
          <FontAwesomeIcon className="h-20 mb-4" icon={faCalendarAlt} />
          <p className="text-xl font-semibold">32 Lata</p>
          <p className="text-sm">doświadczenia</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <FontAwesomeIcon className="h-20 mb-4" icon={faSmile} />
          <p className="text-xl font-semibold">Ponad 10 tysięcy</p>
          <p className="text-sm">Zadowolonych klientów</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <FontAwesomeIcon className="h-20 mb-4" icon={faThumbsUp} />
          <p className="text-xl font-semibold">Gwarancja jakości</p>
          <p className="text-sm">Najwyższe standardy</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <FontAwesomeIcon className="h-20 mb-4" icon={faUsers} />
          <p className="text-xl font-semibold">Profesjonalny zespół</p>
          <p className="text-sm">Doświadczony i kompetentny</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <FontAwesomeIcon className="h-20 mb-4" icon={faHandshake} />
          <p className="text-xl font-semibold">Lokalny biznes</p>
          <p className="text-sm">Wsparcie dla lokalnej społeczności</p>
        </div>
      </div>
    </div>
  );
}
