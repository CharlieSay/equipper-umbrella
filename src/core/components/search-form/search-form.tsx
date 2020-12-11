import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { BaseUnitTopBottomPadding } from "../../style/containers.styles";
import { getSearchQuery } from "../../../hooks/storage-hooks";

interface SearchFormProps {
  maxWidth: number;
  excludeButton?: boolean;
  placeholderText?: string;
}

const SearchForm = (props: SearchFormProps) => {
  const { maxWidth, excludeButton, placeholderText } = props;
  const [toSearch, setToSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      {toSearch ? (
        <Redirect to={`/search${getSearchQuery(searchQuery)}`} />
      ) : null}
      <Form
        onSubmit={() => setToSearch(true)}
        style={{ width: `100%`, display: `inline` }}
        inline
      >
        <BaseUnitTopBottomPadding>
          <FormControl
            type="text"
            placeholder={
              placeholderText ? placeholderText : `Jake Paul, KSI, Molly Mae...`
            }
            style={{ maxWidth: `${maxWidth}px` }}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          {!excludeButton && (
            <Button
              variant="red"
              type="submit"
              style={{ width: `100%`, maxWidth: `150px` }}
            >
              Search
            </Button>
          )}
        </BaseUnitTopBottomPadding>
      </Form>
    </>
  );
};

export default SearchForm;
