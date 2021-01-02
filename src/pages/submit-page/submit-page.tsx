import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Col, Form } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import {
  ContainerConstrained,
  BaseUnitTopBottomPadding,
} from '../../core/style/containers.styles'
import {
  H2TitleLightRed,
  H1HeroTitle,
  H1HeroTitleLightRed,
  PBold,
} from '../../core/style/typography.styles'
import { Centered } from '../../core/components/influencer-card/cards-styles'

const SubmissionSuccess = styled(PBold)`
  font-weight: 400;
`

const SubmitPage = () => {
  const [validated, setValidated] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [newEquipmentRowCount, setNewEquipmentRowCount] = useState(1)
  const prefillFormData = queryString.parse(useLocation().search)
  const { newInfluencer } = prefillFormData

  const formTitle = newInfluencer
    ? 'Submit new influencer'
    : 'Update details of influencer'

  const handleNewLine = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setNewEquipmentRowCount(newEquipmentRowCount + 1)
  }

  const handleRemoveLine = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setNewEquipmentRowCount(newEquipmentRowCount - 1)
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const evidenceArray: {
      name: string
      value: string
    }[] = []
    const target = event.target as typeof event.target & {
      formGridName: { value: string }
      formGridEquipmentName: [{ value: string }]
      formGridEquipmentEvidence: [{ value: string }]
      formGridDetails: { value: string }
    }

    Array.from(Array(newEquipmentRowCount), (i, index) =>
      evidenceArray.push({
        name: target.formGridEquipmentName[index]
          ? target.formGridEquipmentName[index].value
          : (event.target as typeof event.target & {
              formGridEquipmentName: { value: string }
            }).formGridEquipmentName.value,
        value: target.formGridEquipmentEvidence[index]
          ? target.formGridEquipmentEvidence[index].value
          : (event.target as typeof event.target & {
              formGridEquipmentEvidence: { value: string }
            }).formGridEquipmentEvidence.value,
      }),
    )
    setValidated(true)

    const builtFormSubmission = {
      influencerName: target.formGridName.value, // typechecks!
      equipmentDetails: target.formGridDetails.value,
      evidenceArray,
    }
    // Post to API here.
    console.log(builtFormSubmission)
    setSubmitted(true)
  }

  return (
    <ContainerConstrained>
      {!submitted ? (
        <>
          <H1HeroTitle>{formTitle}</H1HeroTitle>
          <BaseUnitTopBottomPadding>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
              {Array.from(Array(newEquipmentRowCount), (i, index) => {
                return (
                  <Form.Row id={`${index}-row`}>
                    <Form.Group as={Col} controlId="formGridEquipmentName">
                      <Form.Label>
                        <H2TitleLightRed>Equipment Name</H2TitleLightRed>
                      </Form.Label>
                      <Form.Control
                        type="equipment"
                        required
                        placeholder="Canon Powershot G7X..."
                        defaultValue={
                          prefillFormData.equipmentName
                            ? prefillFormData.equipmentName
                            : ''
                        }
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEquipmentEvidence">
                      <Form.Label>
                        <H2TitleLightRed>Evidence of equipment</H2TitleLightRed>
                      </Form.Label>
                      <Form.Control
                        type="equipment"
                        required
                        placeholder="YouTube link, instgram link etc..."
                      />
                    </Form.Group>
                    <div style={{ paddingTop: `43px`, marginLeft: `16px` }}>
                      <Button
                        variant="red"
                        style={{ height: `38px` }}
                        onClick={handleNewLine}
                      >
                        +
                      </Button>
                      <Button
                        variant="red"
                        style={{ marginLeft: `8px`, height: `38px` }}
                        disabled={newEquipmentRowCount === 1}
                        onClick={handleRemoveLine}
                        id={`${index}`}
                      >
                        -
                      </Button>
                    </div>
                  </Form.Row>
                )
              })}
              <Form.Group controlId="formGridDetails">
                <Form.Label>
                  <H2TitleLightRed>Details</H2TitleLightRed>
                </Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
              <Button variant="red" type="submit">
                Submit
              </Button>
              <Button
                variant="red"
                type="reset"
                style={{
                  marginLeft: `8px`,
                  backgroundColor: 'transparent',
                  border: '0',
                  color: '#de354c',
                }}
              >
                Reset
              </Button>
            </Form>
          </BaseUnitTopBottomPadding>
        </>
      ) : (
        <Centered>
          <H1HeroTitleLightRed>Success!</H1HeroTitleLightRed>
          <PBold>Thanks for your submission.</PBold>
          <SubmissionSuccess>
            Submissions go through a verification process once the information
            is verified we will endeavour to update the details as soon as
            possible.
          </SubmissionSuccess>
        </Centered>
      )}
    </ContainerConstrained>
  )
}

export default SubmitPage
