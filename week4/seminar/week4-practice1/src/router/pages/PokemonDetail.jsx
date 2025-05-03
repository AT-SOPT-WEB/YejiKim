/** @jsxImportSource @emotion/react */

import { useParams } from "react-router";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  container,
  titleStyle,
  linkStyle,
  detailStyle,
} from "./PokemonDetail.style";

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokemon(res.data);
      } catch (error) {
        console.error("포켓몬 상세 정보를 불러오는 데 실패했습니다.", error);
        setPokemon(null);
      }
    };

    fetchData();
  }, [name]);

  if (!pokemon) {
    return (
      <div css={container}>
        <h2>로딩 중...</h2>
        <Link to="/" css={linkStyle}>
          <span>&lt;-</span> 목록으로
        </Link>
      </div>
    );
  }

  return (
    <div css={container}>
      <Link to="/" css={linkStyle}>
        <span>&lt;-</span> 목록으로
      </Link>
      <h2 css={titleStyle}>{pokemon.name}</h2>
      <div css={detailStyle}>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width="150px"
        />
        <p>
          <strong>Type:</strong>
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </p>
      </div>
    </div>
  );
}

export default PokemonDetail;
