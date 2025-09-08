import { it, expect, describe,vi, beforeEach  } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HomePage } from './HomePage'
import axios from 'axios'

describe('HomePage component', () => {
let loadCart;

  beforeEach(() => {
    loadCart = vi.fn()
    axios.get.mockImplementation((urlPath) => {
      if (urlPath === '/api/products') {
        return{
          data: [
             {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: ["socks", "sports", "apparel"]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"]
  }
          ]
        }
      }
    })
  })

  it('display the products correctly', () => {
    render(<HomePage cart={[]} loadCart={loadCart}/>)
  })
})