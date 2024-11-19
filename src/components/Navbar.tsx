import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Rizwana's Portfolio</h1>
        <div>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
