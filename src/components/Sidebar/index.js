import React from "react";
// import { Link } from "react-router-dom";

//Components
import SearchInput from "../SearchInput";

import { Wrapper, Content } from "./Sidebar.styles";

const Sidebar = () => (
  <Wrapper>
    <h2>Filter Results</h2>
    <Content>
      <SearchInput label="Name (contains)" />
    </Content>
  </Wrapper>
);

export default Sidebar;
