import Image from "next/image";
import "./styles.css";
import { GamesCaroucel } from "./components/gamesCaroucel";

export default function Home() {
  return (
    <div className="">
      <div>
        <Image
          src="/images/banners/Background.png"
          width={2000}
          height={1000}
          alt=""
          className="banner "
        />
        <div>
          <h1>Neon Vanguard: Zero
            Hour</h1>
            <p></p>
            <button></button>
            <button></button>
        </div>
      </div>
      <div className="container">
        <GamesCaroucel />
      </div>
    </div>
  );
}
