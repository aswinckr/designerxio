/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header
      sx={{
        variant: "styles.header",
        marginBottom: 4,
      }}
    >
      <Nav />
    </header>
  );
};

export default Header;
