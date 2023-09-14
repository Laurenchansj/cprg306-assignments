import Link from "next/link";

const studentName = "Tzechi Chan";
const courseSection = "CPRG 306 F";
const githubLink = "https://github.com/Laurenchansj/cprg306-assignments.git";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: {studentName}</p>
      <p>Course section: {courseSection}</p>
      <p>
        GitHub: <Link href={githubLink}>{githubLink}</Link>
      </p>
    </div>
  );
}
