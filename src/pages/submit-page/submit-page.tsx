import React, { useState } from 'react'

import { Button, Col, Form } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import {
  ContainerConstrained,
  BaseUnitTopBottomPadding,
} from '../../core/style/containers.styles'
import { H2TitleLightRed, HeroTitle } from '../../core/style/typography.styles'

const SubmitPage = () => {
  const [validated, setValidated] = useState(false)
  const [newEquipmentRowCount, setNewEquipmentRowCount] = useState(1)
  const prefillFormData = queryString.parse(useLocation().search)
  const { newInfluencer } = prefillFormData

  const formTitle = newInfluencer
    ? 'handleSubmitForNew'
    : 'handleSubmitForUpdate'

  const handleSubmitForNew = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      formGridName: { value: string }
      formGridEquipmentName: { value: string }
      formGridEquipmentEvidence: { value: string }
      formGridDetails: { value: string }
    }
    const builtFormSubmission = {
      influencerName: target.formGridName.value, // typechecks!
      equipmentName: target.formGridEquipmentName.value,
      equipmentEvidence: target.formGridEquipmentEvidence.value,
      equipmentDetails: target.formGridDetails.value,
    }
    // eslint-disable-next-line no-console
    console.log(builtFormSubmission)
    // Post to API here.
    setValidated(true)
  }

  const handleNewLine = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setNewEquipmentRowCount(newEquipmentRowCount + 1)
  }

  const handleRemoveLine = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setNewEquipmentRowCount(newEquipmentRowCount - 1)
  }

  const handleSubmitForUpdate = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      formGridName: { value: string }
      formGridEquipmentName: { value: string }
      formGridEquipmentEvidence: { value: string }
      formGridDetails: { value: string }
    }
    const builtFormSubmission = {
      influencerName: target.formGridName.value, // typechecks!
      equipmentName: target.formGridEquipmentName.value,
      equipmentEvidence: target.formGridEquipmentEvidence.value,
      equipmentDetails: target.formGridDetails.value,
    }
    // eslint-disable-next-line no-console
    console.log(builtFormSubmission)
    // Post to API here.
    setValidated(true)
  }

  return (
    <ContainerConstrained>
      <HeroTitle>{formTitle}</HeroTitle>
      <BaseUnitTopBottomPadding>
        <Form
          noValidate
          validated={validated}
          onSubmit={newInfluencer ? handleSubmitForNew : handleSubmitForUpdate}
        >
          <Form.Group controlId="formGridName">
            <Form.Label>
              <H2TitleLightRed>Influencer Name</H2TitleLightRed>
            </Form.Label>
            <Form.Control
              placeholder="Vikkstar, Molly Mae..."
              defaultValue={
                prefillFormData.influencerName
                  ? prefillFormData.influencerName
                  : ''
              }
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {Array.from(Array(newEquipmentRowCount), () => {
            return (
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEquipmentName">
                  <Form.Label>Equipment Name</Form.Label>
                  <Form.Control
                    type="equipment"
                    placeholder="Canon Powershot G7X..."
                    required
                    defaultValue={
                      prefillFormData.equipmentName
                        ? prefillFormData.equipmentName
                        : ''
                    }
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEquipmentEvidence">
                  <Form.Label>Evidence of equipment</Form.Label>
                  <Form.Control type="equipment" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEquipmentEvidence">
                  <Form.Control>
                    <Button
                      variant="red"
                      style={{ height: `38px` }}
                      onClick={handleNewLine}
                    >
                      +
                    </Button>
                    <Button
                      variant="red"
                      style={{ height: `38px` }}
                      onClick={handleRemoveLine}
                    >
                      -
                    </Button>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
            )
          })}
          <Form.Group controlId="formGridDetails">
            <Form.Label>
              <H2TitleLightRed>Details</H2TitleLightRed>
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="red" type="submit">
            Submit
          </Button>
        </Form>
      </BaseUnitTopBottomPadding>
    </ContainerConstrained>
  )
}

export default SubmitPage
