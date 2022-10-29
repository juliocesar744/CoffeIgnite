import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  gap: 1rem;
`

export const BaseText = styled.p`
  display: flex;
  align-items: center;
  gap: 0.3rem
`

export const Text = styled(BaseText)`
  font-family: 'Baloo', cursive;
  font-size: 48px;
  font-weight: 700;
`
export const SubText = styled(BaseText)`
  font-family: 'Roboto', monospace;
  font-size: 20px;
  font-weight: 400;
  padding-top: 1rem;
`
export const DivIcons = styled.div`
  display: flex;
  gap: 5rem;
  padding-top: 1rem;
`

export const CoffesContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:flex-start;
  padding: 2rem 10rem;
  gap: 2rem;
`

export const TextCoffe = styled.div`
  font-family: 'Baloo 2';
  font-size: 2rem;
  padding: 0 10rem;
`