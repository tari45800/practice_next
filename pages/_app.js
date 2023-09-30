import styled from "styled-components";

const AppContainer = styled.div``;

export default function App({ Component, pageProps }) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  );
}
