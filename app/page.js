import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main class="flex min-h-screen flex-col p-24">
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
        </ul>
      </div>
    </main>
  );
}
