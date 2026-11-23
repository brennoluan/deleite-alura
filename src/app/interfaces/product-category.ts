import type { Product } from './product';

export interface ProductCategory {
    id: number;
    title: string;
    products: Product[];
}
