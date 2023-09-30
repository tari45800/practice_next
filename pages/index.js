import Link from "next/link";
import styled from "styled-components";
import SearchForm from "@/conponents/SearchForm";

const HomeContainer = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

export default function Home() {
  return (
    <>
      <HomeContainer>
        <h1>WatchIt</h1>
        <SearchForm></SearchForm>
        <div>
          <Link href="/movies/1">첫 번째 상품</Link>
        </div>
        <div>
          <Link href="/movies/2">두 번째 상품</Link>
        </div>
        <div>
          <Link href="/movies/3">세 번째 상품</Link>
        </div>
      </HomeContainer>
    </>
  );
}
