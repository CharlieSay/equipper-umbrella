import styled from 'styled-components'
import { PBold, Small } from '../../core/style/typography.styles'

export const EquipmentCard = styled.div`
  background-color: white;
  border-radius: 8px;
  border: red;
  margin: 16px 0 16px 0;
  padding: 16px 32px 16px 16px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.01), 0 15px 12px rgba(0, 0, 0, 0.01);
  width: 47%;
  @media screen and (max-width: 552px) {
    padding: 16px;
    text-align: center;
  }
`

export const Description = styled(Small)`
  line-height: 6px;
`

export const WideCard = styled(EquipmentCard)`
  width: 100%;
`

export const PFriendlyEquipmentName = styled(PBold)`
  font-size: 18px;
`

export const KeyFactsKey = styled(PBold)`
  font-size: 0.9em;
`

export const KeyFactsValue = styled(PBold)`
  font-size: 0.9em;
  font-weight: normal;
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

export const SmallPrint = styled.small`
  color: ${(props) => props.theme.darkBlue};
`
