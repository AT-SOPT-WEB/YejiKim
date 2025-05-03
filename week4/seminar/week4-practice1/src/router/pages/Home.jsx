/** @jsxImportSource @emotion/react */

import { Link } from "react-router";
import { container, navStyle, titleStyle, linkStyle } from "./Home.style";
function Home() {
  return (
    <div css={container}>
      <h1 css={titleStyle}>포켓몬 도감</h1>
      <nav css={navStyle}>
        <Link to="/pokemon/피카츄" css={linkStyle}>
          피카츄
        </Link>
        <Link to="/pokemon/이상해씨" css={linkStyle}>
          이상해씨
        </Link>
      </nav>
    </div>
  );
}

export default Home;
