import React, { ChangeEvent, useState, KeyboardEvent } from "react";

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
      searchMovieFn(inputData, "SearchPage");
  };

  return (
    <section>
      <div
        className={
          pageState === "MainPage"
            ? "searchInputSpaceMain"
            : "searchInputSpaceSub"
        }
        style={
          pageState === "SearchPage"
            ? { position: "fixed" }
            : pageState === "MainPage"
            ? {}
            : { position: "absolute" }
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
            searchMovieFn(inputData, "SearchPage");
          }}
          className="input-group-text"
        >
          검색
        </button>
      </div>
    </section>
  );
}
