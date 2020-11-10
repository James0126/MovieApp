import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import * as ApiUrl from "./ApiUrl";

export default function SearchInput({ clickFn, pageState }: MovieSearchSpace) {
  const [inputData, setInputData] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputData(e.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent): void => {
    if (event.key === "Enter" && inputData !== "")
      clickFn(ApiUrl.searchQuery + inputData, "SearchPage");
    else return;
  };

  return (
    <section>
      <form
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
            clickFn(ApiUrl.searchQuery + inputData, "SearchPage");
          }}
          className="input-group-text"
        >
          검색
        </button>
      </form>
    </section>
  );
}
