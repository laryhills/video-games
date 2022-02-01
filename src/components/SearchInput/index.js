import React from "react";

import { Wrapper } from "./SearchInput.styles";

const SearchInput = ({ placeholder, label }) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </Wrapper>
  );
};

export default SearchInput;
