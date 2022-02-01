import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  background-color: #0e1a2b;
  margin: 10px auto;
  justify-content: space-between;
`;

export const Content = styled.div`
  padding: 5px 10px;
  width: 100%;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  h2 {
    font-size: 1.3rem;
    padding: 0;
    margin: 2px;
  }
`;

export const Text = styled.div`
  padding: 10px 0;
`;

export const Rating = styled.div`
  background-color: #6c70ed;
  border-radius: 50%;
  padding: 5px;
  margin: auto 15px;
  font-size: small;
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
