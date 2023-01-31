import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  color: ${(p) => p.theme.text};
`;
export const Card = styled.div`
  width: 50%;
  background: ${(p) => p.theme.cards};
  height: auto;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);

  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.border};

  button {
    padding: 10px 25px;
    outline: none;
    border: none;
    border-radius: 8px;
    background: ${(p) => p.theme.button.background};
    color: ${(p) => p.theme.button.text};
    transition: 0.5s ease;
    font-size: 15px;
    /* margin: auto; */

    &:hover {
      background: ${(p) => p.theme.button.hover.background};
      color: ${(p) => p.theme.button.hover.text};
    }
  }

  @media screen and (max-width: 900px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
export const Avatar = styled.div`
  /* padding: 20px; */
  width: 150px;
  height: 150px;
  margin: auto;
  border: 2px solid ${(p) => p.theme.border};
  border-radius: 50%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 2px solid ${(p) => p.theme.border};
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
export const UserInfo = styled.div`
  text-align: center;
  color: ${(p) => p.theme.text};
  display: grid;
  grid-gap: 10px;
  margin-bottom: 20px;

  .info {
    font-size: 13px;
    color: ${(p) => p.theme.content};
  }
`;
