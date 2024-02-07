import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((selector) => selector.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BiSearch></BiSearch>
        </InputLeftElement>
        <Input
          ref={ref}
          type="text"
          placeholder="Search games..."
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
