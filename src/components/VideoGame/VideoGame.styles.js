import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  background-color: #0e1a2b;
  margin: 10px auto;
`;

export const Content = styled.div`
  padding: 5px 10px;
`;

export const Title = styled.div`
  h2 {
    padding: 0;
    margin: 2px;
  }
`;

export const Text = styled.div`
  padding: 10px 0;
`;

export const Image = styled.img`
  animation: animateVideoGame 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateVideoGame {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
