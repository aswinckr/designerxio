/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const Nav = () => {
  return (
    <nav
      sx={{
        variant: "styles.header",
        marginBottom: 4,
      }}
    >
      <p>Logo</p>
      <Link href="/courses">
        <a>Courses</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </nav>
  );
};

export default Nav;
