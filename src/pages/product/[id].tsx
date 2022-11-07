import { useRouter } from 'next/router'

import Image from 'next/image'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>{/* <Image  /> */}</ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt beatae
          recusandae libero, labore doloremque voluptate temporibus molestias
          pariatur nobis quo dolor, ad, repudiandae debitis aliquam fuga ut
          minus illum explicabo!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
