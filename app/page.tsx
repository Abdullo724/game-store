import Image from "next/image";
import "./styles.css";
import { GamesCaroucel } from "./components/gamesCaroucel";

export default function Home() {
  return (
    <div className="">
      <Image
        src="/images/banners/gameBunner.jpg"
        width={1800}
        height={600}
        alt=""
        className="banner"
      />
      <div className="container">
        <GamesCaroucel />
      </div>
    </div>
  );
}
