import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import * as ApiUrl from "./ApiUrl";

export default function SearchInput({
  searchMovieFn,
  pageState,
}: MovieSearchSpace) {
  const [inputData, setInputData] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputData(e.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent): void => {
    if (event.key === "Enter" && inputData !== "")
      searchMovieFn(ApiUrl.searchQuery + inputData, "SearchPage");
  };

  return (
    <section>
      <div
        className={
          pageState === "MainPage"
            ? "searchInputSpaceMain"
            : "searchInputSpaceSub"
        }
      >
        <input
          type="text"
          name="search"
          onChange={onChange}
          value={inputData}
          className="searchInputField form-control"
          onKeyPress={handleKeyPress}
          placeholder="영화 이름을 입력하세요."
          autoComplete="off"
        />
        <button
          onClick={() => {
            searchMovieFn(ApiUrl.searchQuery + inputData, "SearchPage");
          }}
          className="input-group-text"
        >
          검색
        </button>
      </div>
    </section>
  );
}
