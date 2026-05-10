import Link from "next/link";
import "./styles.css";

export const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <h1 className="header-title">Game Store</h1>
      </Link>
      <nav className="menu">
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/games">
            <li>Games</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
