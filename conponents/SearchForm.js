import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchForm({ initialValue = "" }) {
  let [value, setValue] = useState(initialValue);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      router.push(`/`);
      return;
    }
    router.push(`/search?q=${value}`);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" type="text" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
