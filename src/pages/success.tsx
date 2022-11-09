import Link from 'next/link'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efeturada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Thiago Cedran</strong>, sua{' '}
        <strong>Camiseta Blabla</strong> já está a caminho de sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
