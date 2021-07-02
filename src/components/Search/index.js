import "./Search.scss";
import { memo, useRef, useState } from "react";
import debounce from "lodash.debounce";

const DEFAULT_DELAY = 1000;
const Search = memo(({ onSearch, delay = DEFAULT_DELAY, placeholder }) => {
  const [userQuery, setUserQuery] = useState("");
  const delayedQuery = useRef(debounce((q) => onSearch(q), delay)).current;

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setUserQuery(value);
    delayedQuery(value);
  };

  return (
    <input
      onChange={onChange}
      value={userQuery}
      placeholder={placeholder}
      className="search"
      type="text"
    />
  );
});

export default Search;
