import React, { ChangeEvent, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const SearchInput = () => {
  const [inputData, setInputData] = useState<string>("");
  const location = useLocation();
  const history = useHistory();

  const onChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setInputData(e.target.value);
  const searchMovieList = (e: any) => {
    e.preventDefault();
    if (inputData !== "") history.push(`/searchPage/search?query=${inputData}`);
  };

  return (
    <section>
      <form
        onSubmit={searchMovieList}
        className={
          location.pathname.startsWith("/info") ||
          location.pathname.startsWith("/searchPage")
            ? "searchInputSpaceSub"
            : "searchInputSpaceMain"
        }
        style={{
          position: location.pathname.startsWith("/searchPage")
            ? "fixed"
            : location.pathname.startsWith("/info")
            ? "absolute"
            : "relative",
        }}
      >
        <input
          type="text"
          name="search"
          onChange={onChange}
          value={inputData}
          className="searchInputField form-control"
          placeholder="영화 이름을 입력하세요."
          autoComplete="off"
        />
        <button type="submit" className="input-group-text">
          검색
        </button>
      </form>
    </section>
  );
};
export default SearchInput;
