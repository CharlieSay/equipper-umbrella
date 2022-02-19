import styled from 'styled-components'

export const Cards = styled.section`
  display: grid;
  grid-gap: 1rem;

  /* Partially responsive fallback */
  grid-template-columns: repeat(auto-fill, minmax(calc(10% + 7.5rem), 1fr));

  /* Fully responsive version */
  grid-template-columns: repeat(auto-fill, minmax(min(15rem, 100%), 1fr));
  padding: 0;
`

export const Centered = styled.div`
  margin: 0 auto;
`

export const VerticalCenter = styled.div`
  height: 100%;
`

export const CardContent = styled.div`
  padding: 1em;
`

export const InfluencerCard = styled.a`
  flex: 1 0 260px;
  box-sizing: border-box;
  margin: 1rem 0.25em;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  width: clamp(200px, 95%, 600px);
  &:hover {
    text-decoration: none;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.01), 0 15px 12px rgba(0, 0, 0, 0.01);
  }
`

export const WideCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 32px 16px 32px 16px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.01), 0 15px 12px rgba(0, 0, 0, 0.01);
  margin: 8px;
`

export const CardAsDiv = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 31px 16px 31px 16px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.01), 0 15px 12px rgba(0, 0, 0, 0.01);
`

export const CardTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5em;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${(props) => props.theme.lightRed};
`

export const UpdatedBlurb = styled.small`
  font-size: 60%;
  font-weight: 400;
  color: ${(props) => props.theme.lightRed};
`

export const CardText = styled.p`
  font-size: 60%;
  font-weight: light;
  color: ${(props) => props.theme.lightRed};
`

export const Image = styled.img`
  display: block;
  border: 0;
  width: 100%;
  aspect-ratio: 1/1;
  height: auto;
  border-radius: 0.5rem 0.5rem 0 0;
`

export const CardFooter = styled.div`
  padding: 0.75em;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  justify-content: space-between;
`
