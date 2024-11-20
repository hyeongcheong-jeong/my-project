import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>react 정리</h1>
      <nav>
        <Link to="/redux">redux</Link>
        <Link to="/eslint">eslint</Link>
      </nav>
    </main>
  );
}
