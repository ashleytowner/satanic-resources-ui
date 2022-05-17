import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Dropdown from "./Dropdown";

export type SearchFieldChangeEvent = (fieldId: string, field: string, query: string) => void;

function SearchBar(props: { fieldId: string, onChange: SearchFieldChangeEvent }) {
  const { onChange, fieldId } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    onChange(fieldId, '', e.target.value);
  }

  return (
    <div>
      <input
        name="search"
        placeholder="Search Resources"
        className="bg-l1 w-11/12 m-auto my-4 rounded-md p-3 block h-10"
        type="search"
        onChange={handleChange}
      />
    </div>
  )
}

function Search(props: { onSearch: (query: string) => void }) {
  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    props.onSearch(search);
  }

  const handleChange: SearchFieldChangeEvent = (_, __, query) => {
    setSearch(query)
    if (query === '') {
      props.onSearch(search);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search" className="block w-11/12 m-auto my-4 text-lg">Search Resources:</label>
      <SearchBar fieldId="search" onChange={handleChange} />
    </form>
  )
}

export default Search;
