import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <ul>
          <li>
            <Link href="/week2">week2</Link>
          </li>
          <li>
            <Link href="/week3">week3</Link>
          </li>
          <li>
            <Link href="/week4">week4</Link>
          </li>
          <li>
            <Link href="/week5">week5</Link>
          </li>
          <li>
            <Link href="/week6">week6</Link>
          </li>
          <li>
            <Link href="/week7">week7</Link>
          </li>
          <li>
            <Link href="/week8">week8</Link>
          </li>
          <li>
            <Link href="/week10">week10</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
