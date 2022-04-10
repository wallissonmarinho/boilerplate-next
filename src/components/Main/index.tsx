import * as Styles from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, NextJS, ReactJS e Styled Components'
}) => (
  <Styles.Wrapper>
    <Styles.Logo src="/img/logo.svg" alt="logo" />
    <Styles.Title>{title}</Styles.Title>
    <Styles.Description>{description}</Styles.Description>
    <Styles.Logo src="/img/hero-illustration.svg" alt="logo" />
  </Styles.Wrapper>
)

export default Main
