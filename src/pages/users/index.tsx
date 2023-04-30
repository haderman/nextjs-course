import Link from "next/link";

export default function Users() {
  return (
    <div>
      <h1>Users</h1>
      <p>This is the users page</p>
      <Link href="/users/me">
        GO TO ME
      </Link>
    </div>
  );
}
