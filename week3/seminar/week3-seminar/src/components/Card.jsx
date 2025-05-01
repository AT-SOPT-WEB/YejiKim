import style from "./Card.module.css";

const Card = ({ member }) => {
  return (
    <div className={style.card}>
      <h3>{member.name}</h3>
      <p>깃허브 : {member.github}</p>
      <p>영문이름 : {member.englishName}</p>
    </div>
  );
};

export default Card;
