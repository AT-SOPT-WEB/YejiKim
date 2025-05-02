/** @jsxImportSource @emotion/react */
import {
  userInfoCardStyle,
  userInfoAnchorStyle,
  userInfoImageStyle,
  profileTextStyle,
  userFollowWrapperStyle,
  userFollowStyle,
  userFollowTextStyle,
  cardCloseButtonStyle,
} from './UserInfoCard.style';
import { AiOutlineClose } from 'react-icons/ai';

function UserInfoCard({ user, onClear }) {
  return (
    <article css={userInfoCardStyle}>
      <button css={cardCloseButtonStyle} onClick={onClear}>
        <AiOutlineClose />
      </button>

      <a css={userInfoAnchorStyle} href={user.html_url} target="_blank" rel="noreferrer">
        <img src={user.avatar_url} alt={`${user.login} 프로필 이미지`} css={userInfoImageStyle} />
      </a>

      <header>
        <a css={userInfoAnchorStyle} href={user.html_url} target="_blank" rel="noreferrer">
          <h2>{user.name || user.login}</h2>
        </a>
        <p css={profileTextStyle}>@{user.login}</p>
        {user.bio && <p css={profileTextStyle}>{user.bio}</p>}
      </header>

      <section css={userFollowWrapperStyle}>
        <div css={userFollowStyle}>
          [ Followers ]
          <strong>
            <span css={userFollowTextStyle}>{user.followers}</span>
          </strong>
        </div>
        <div css={userFollowStyle}>
          [ Following ]
          <strong>
            <span css={userFollowTextStyle}>{user.following}</span>
          </strong>
        </div>
      </section>
    </article>
  );
}

export default UserInfoCard;
