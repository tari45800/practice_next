import { useRouter } from "next/router";
import styled from "styled-components";
import SearchForm from "@/conponents/SearchForm";

const SearchContainer = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <SearchContainer>
        <h1>watchit</h1>
        <SearchForm initialValue={q}></SearchForm>
        <h2>{q} 검색 결과</h2>
      </SearchContainer>
    </>
  );
}
