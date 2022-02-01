import styled from "styled-components";

export const Wrapper = styled.div`
  input {
    display: block;
    width: 100%;
    background-color: #182c47;
    height: 40px;
    padding: 5px 10px;
    color: #fff;
    outline: none;
    border: none;

    :focus {
      outline: none;
    }
  }
  label {
    display: block;
    font-weight: normal;
  }
`;
