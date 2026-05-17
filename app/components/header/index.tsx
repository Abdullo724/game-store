import Link from "next/link";
import "./styles.css";  

export const Header = () => {
  return (
    <header className="header container">
      <Link href="/">
        <h1 className="header-title">Game Store</h1>
      </Link>
      <nav className="menu">
        <ul>
          <Link href="/">
            <li>Home</li>
            <span className="link-line"/>
          </Link>
          <Link href="/games">
            <li>Games</li>
            <span className="link-line"/>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
            <span className="link-line"/>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
