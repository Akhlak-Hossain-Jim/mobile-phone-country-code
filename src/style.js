import styled from "styled-components";

const AppContainer = styled.div`
  header {
    display: flex;
    align-items: center;
    gap: calc(10px + 2vmin);
    padding: calc(24px + 2vmin);
    .search__box {
      flex: 1;
      display: flex;
      align-items: center;
      background-color: var(--bg-secondary);
      border-radius: 20px;
      padding: calc(5px + 2vmin);
      box-shadow: var(--box-shadow-bg-s);
      color: var(--color-secondary);
      gap: calc(10px + 2vmin);
      input {
        flex: 1;
        border: none;
        outline: none;
        background-color: transparent;
        color: var(--color-secondary);
        font-size: calc(10px + 2vmin);
        font-weight: bold;
        &::placeholder {
          color: var(--color-secondary);
        }
      }
    }
  }
  main {
    padding: calc(24px + 2vmin);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    & > div {
      padding: calc(5px + 2vmin);
      border: 1px solid var(--bg-secondary);
      color: var(--color-secondary);
      &:nth-child(even) {
        color: var(--color-third);
      }
      &.title {
        color: var(--color);
        font-weight: 900;
      }
    }
    &.error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: min(250px, 100%);
        height: auto;
        margin-bottom: 24px;
      }
    }
  }
  footer {
    padding: calc(16px + 2vmin);
    text-align: center;
    a {
      color: var(--color-third);
      text-decoration: none;
    }
  }
`;

export default AppContainer;
