import React, { useState } from 'react'
import { Form, Button, Row } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { BaseUnitTopBottomPadding } from '../../style/containers.styles'
import getSearchQuery from '../../../hooks/storage-hooks'

interface SearchFormProps {
  excludeButton?: boolean
  placeholderText?: string
}

const SearchForm = (props: SearchFormProps) => {
  const { excludeButton, placeholderText } = props
  const [toSearch, setToSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <>
      {toSearch ? (
        <Redirect to={`/search${getSearchQuery(searchQuery)}`} />
      ) : null}
      <BaseUnitTopBottomPadding>
        <Form
          onSubmit={() => setToSearch(true)}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Row style={{ maxWidth: `50%` }}>
            <Form.Control
              onChange={(event) => setSearchQuery(event.target.value)}
              type="text"
              placeholder={placeholderText || 'Jake Paul, KSI, Molly Mae...'}
            />
            <Form.Text className="text-muted">Enter your query</Form.Text>
          </Row>
          {!excludeButton && (
            <Button
              variant="red"
              type="submit"
              style={{
                marginLeft: `8px`,
                maxWidth: `150px`,
                maxHeight: `38px`,
              }}
            >
              Search
            </Button>
          )}
        </Form>
      </BaseUnitTopBottomPadding>
    </>
  )
}

export default SearchForm
