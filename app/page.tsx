import Image from "next/image";
import "./styles.css";
import { GamesCaroucel } from "./components/gamesCaroucel";

export default function Home() {
  return (
    <div className="">
      <div className="head-backgroung">
        <Image
          src="/images/banners/Background.png"
          width={2000}
          height={1000}
          alt=""
          className="banner "
        />
        <div className="info container">
          <div className="block">
            <h1 >Neon Vanguard: Zero
              Hour</h1>
            <p >Infiltrate the mega-corp spire in the most anticipated cybernetic
              stealth-action game of the year. Secure your loadout and dive into the
              neon abyss.</p>
            <button className="first-btn">PLAY NOW</button>
            <button className="second-btn">TRAILER</button>
          </div>
        </div>
      </div>
      <div className="container">
        <GamesCaroucel />
      </div>
    </div>
  );
}
