import * as S from './style'

export function Login(): JSX.Element {
  return (
    <S.Container>
      <img src="../assets/background.png" alt="" />
      <h1>Condominiums Web</h1>
      <form>
        <input type="text" placeholder='Email' />
        <input type="password" placeholder='senha' />
        <input type="submit" value={'Login'} />
      </form>
    </S.Container>
  )
}