/** @jsxImportSource @emotion/react */

import { useParams } from "react-router";
import { Link } from "react-router";
import {
  container,
  titleStyle,
  linkStyle,
  detailStyle,
} from "./PokemonDetail.style";
function PokemonDetail() {
  const { name } = useParams();

  return (
    <div css={container}>
      <Link to="/" css={linkStyle}>
        <span>&lt;-</span> 목록으로
      </Link>
      <h2 css={titleStyle}>{name}</h2>
      <div css={detailStyle}>상세 정보..</div>
    </div>
  );
}

export default PokemonDetail;
