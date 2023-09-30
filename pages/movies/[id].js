import { useRouter } from "next/router";
import styled from "styled-components";

const MovieContainer = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <MovieContainer>
        <h1>제 {id} 영화야</h1>
      </MovieContainer>
    </>
  );
}
