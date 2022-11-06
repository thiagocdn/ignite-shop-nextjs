import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$rocketseat',
})

export default function Home() {
  return (
    <div>
      <Button>Hello World!</Button>
      <span>Hello</span>
    </div>
  )
}
