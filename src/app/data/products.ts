import { ProductCategory } from "../interfaces/product-category";


export const products: ProductCategory[] = [
  {
    id: 1,
    title: 'Milkshakes',
    products: [
      {
        id: 1,
        title: 'Milkshake de Amora',
        price: 18.0,
        image: 'assets/images/milkshakes/milkshake-amora.png'
      },
      {
        id: 2,
        title: 'Milkshake de Maracujá',
        price: 18.0,
        image: 'assets/images/milkshakes/milkshake-maracuja.png'
      },
      {
        id: 3,
        title: 'Milkshake de Morango',
        price: 18.0,
        image: 'assets/images/milkshakes/milkshake-morango.png'
      },
      {
        id: 4,
        title: 'Milkshake Verde',
        price: 18.0,
        image: 'assets/images/milkshakes/milkshake-verde.png'
      },
    ]
  },
  {
    id: 2,
    title: 'Ice Creams',
    products: [
      {
        id: 1,
        title: 'Soverte de morango com framboesa',
        price: 18.0,
        image: 'assets/images/icecreams/sorvete-morango.png'
      },
      {
        id: 2,
        title: 'Sorvete de amora',
        price: 18.0,
        image: 'assets/images/icecreams/sorvete-amora.png'
      },
      {
        id: 3,
        title: 'Sorvete de limão',
        price: 18.0,
        image: 'assets/images/icecreams/sorvete-limao.png'
      },
      {
        id: 4,
        title: 'Sorvete de pistache',
        price: 18.0,
        image: 'assets/images/icecreams/sorvete-pistache.png'
      }
    ]
  },
  {
    id: 3,
    title: 'Smoothies',
    products: [
      {
        id: 1,
        title: 'Smoothie de caju',
        price: 18.00,
        image: 'assets/images/smoothies/smoothie-caju.png'
      },
      {
        id: 2,
        title: 'Smoothie de framboesa',
        price: 18.00,
        image: 'assets/images/smoothies/smoothie-framboesa.png'
      },
      {
        id: 3,
        title: 'Smoothie de kiwi',
        price: 18.00,
        image: 'assets/images/smoothies/smoothie-kiwi.png'
      },
      {
        id: 4,
        title: 'Smoothie de morango',
        price: 18.00,
        image: 'assets/images/smoothies/smoothie-morango.png'
      }
    ]
  },
  {
    id: 4,
    title: 'Ice Coffee',
    products: [
      {
        id: 1,
        title: 'Capuccino gelado',
        price: 18.00,
        image: 'assets/images/icecoffee/capuccino-gelado.png'
      },
      {
        id: 2,
        title: 'Capuccino gelado com leite vegetal',
        price: 18.00,
        image: 'assets/images/icecoffee/capuccino-gelado-leite-vegetal.png'
      },
      {
        id: 3,
        title: 'Affogato',
        price: 18.00,
        image: 'assets/images/icecoffee/affogato.png'
      },
      {
        id: 4,
        title: 'Expresso gelado com chantilly',
        price: 18.00,
        image: 'assets/images/icecoffee/expresso-gelado-chantilly.png'
      }
    ]
  }
];
