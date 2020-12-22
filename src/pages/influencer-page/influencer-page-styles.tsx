import styled from 'styled-components'
import { PBold } from '../../core/style/typography.styles'

export const EquipmentCard = styled.div`
  background-color: white;
  border-radius: 8px;
  border: red;
  margin: 16px 0 16px 0;
  padding: 16px 32px 16px 16px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.01), 0 15px 12px rgba(0, 0, 0, 0.01);
  @media screen and (max-width: 552px) {
    padding: 16px;
    text-align: center;
  }
`

export const PFriendlyEquipmentName = styled(PBold)`
  font-size: 18px;
`

export const ContentTableCard = styled.div`
  background-color: white;
  border-radius: 8px;
  border: red;
  margin: 16px 0 16px 0;
  padding: 16px 32px 16px 16px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.01), 0 15px 12px rgba(0, 0, 0, 0.01);
`

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: calc(${(props) => props.theme.defaultPadding} * 2);
`

export const MarginSixteenPixels = styled.div`
  padding: 16px;
`
