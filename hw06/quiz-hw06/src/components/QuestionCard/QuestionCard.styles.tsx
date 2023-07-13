import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1.5rem;
  }

  .answers {
    display: flex;
    flex-wrap: wrap;
  }

  .answers > * {
    flex-basis: 50%;
  }
`;
