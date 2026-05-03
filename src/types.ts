export interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  size: string;
  idealFor: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '5lb',
    name: 'Presentación 5 Libras',
    description: 'Nuestra presentación más grande, ideal para negocios o grandes familias.',
    size: '2.5 kg',
    idealFor: 'Negocios, cafeterías o familias amantes del café.',
    image: '/1punto4_2500.png'
  },
  {
    id: '1lb',
    name: 'Presentación 1 Libra',
    description: 'El formato estándar perfecto para el consumo semanal en el hogar.',
    size: '500 g',
    idealFor: 'Consumo estándar en casa.',
    image: '/1punto4_500.png'
  },
  {
    id: '340g',
    name: 'Presentación 340 Gramos',
    description: 'El equilibrio justo para quienes buscan frescura constante.',
    size: '340 g',
    idealFor: 'Presentaciones medianas con frescura constante.',
    image: '/1punto4_Bolsa_340.png'
  },
  {
    id: '250g',
    name: 'Presentación 250 Gramos',
    description: 'Ideal para probar nuestras variedades o para un detalle sofisticado.',
    size: '250 g',
    idealFor: 'Pruebas o detalles especiales y sofisticados.',
    image: '/1punto4_250.png'
  }
];
