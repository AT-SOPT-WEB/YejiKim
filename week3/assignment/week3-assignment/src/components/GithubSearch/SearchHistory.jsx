/** @jsxImportSource @emotion/react */
import {
  historySectionStyle,
  historyListStyle,
  historyItemStyle,
  historyItemButtonStyle,
  historyDeleteButtonStyle,
} from './SearchHistory.style';
import { AiOutlineClose } from 'react-icons/ai';

function SearchHistory({ history, onSelect, onDelete }) {
  return (
    <section css={historySectionStyle}>
      <p>최근 검색어</p>
      <ul css={historyListStyle} aria-label="검색 기록">
        {history.map((item) => (
          <li key={item} css={historyItemStyle}>
            <button onClick={() => onSelect(item)} css={historyItemButtonStyle} aria-label="검색">
              {item}
            </button>
            <button onClick={() => onDelete(item)} css={historyDeleteButtonStyle} aria-label="삭제">
              <AiOutlineClose />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SearchHistory;
