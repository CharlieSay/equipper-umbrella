import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import {
  ContainerConstrained,
  BaseUnitTopBottomPadding,
} from "../../core/style/containers.styles";
import { HeroTitle } from "../../core/style/typography.styles";

const SubmitPage = () => {
  const [validated, setValidated] = useState(false);
  const prefillFormData = queryString.parse(useLocation().search);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      formGridName: { value: string };
      formGridEquipmentName: { value: string };
      formGridEquipmentEvidence: { value: string };
      formGridDetails: { value: string };
    };
    const builtFormSubmission = {
      influencerName: target.formGridName.value, // typechecks!
      equipmentName: target.formGridEquipmentName.value,
      equipmentEvidence: target.formGridEquipmentEvidence.value,
      equipmentDetails: target.formGridDetails.value,
    };
    // eslint-disable-next-line no-console
    console.log(builtFormSubmission);
    // Post to API here.
    setValidated(true);
  };

  return (
    <ContainerConstrained>
      <HeroTitle>Let us know what to update</HeroTitle>
      <BaseUnitTopBottomPadding>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formGridName">
            <Form.Label>Influencer Name</Form.Label>
            <Form.Control
              placeholder="Vikkstar, Molly Mae..."
              defaultValue={
                prefillFormData.influencerName
                  ? prefillFormData.influencerName
                  : ""
              }
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGridEquipmentName">
            <Form.Label>Equipment Name</Form.Label>
            <Form.Control
              type="equipment"
              placeholder="Canon Powershot G7X..."
              required
              defaultValue={
                prefillFormData.equipmentName
                  ? prefillFormData.equipmentName
                  : ""
              }
            />
          </Form.Group>
          <Form.Group controlId="formGridEquipmentEvidence">
            <Form.Label>Evidence of equipment</Form.Label>
            <Form.Control
              type="equipment"
              placeholder="YouTube link, instagram link etc..."
              required
            />
          </Form.Group>
          <Form.Group controlId="formGridDetails">
            <Form.Label>Details</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="red" type="submit">
            Submit
          </Button>
        </Form>
      </BaseUnitTopBottomPadding>
    </ContainerConstrained>
  );
};

export default SubmitPage;
