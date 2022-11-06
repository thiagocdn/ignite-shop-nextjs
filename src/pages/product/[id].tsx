import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  console.log('query', query)

  return <h1>Product</h1>
}
