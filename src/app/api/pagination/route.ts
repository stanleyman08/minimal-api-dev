import type { NextRequest } from 'next/server';

import { uniq } from 'es-toolkit';

import { STATUS, response, handleError } from 'src/utils/response';

// ----------------------------------------------------------------------

export const runtime = 'edge';

const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 10;
const TOTAL_PRODUCTS = 50;

const _products = Array.from({ length: TOTAL_PRODUCTS }, (_, index) => ({
  id: `id-${index + 1}`,
  name: `product-${index + 1}`,
  category: (index % 2 && 'Accessories') || (index % 3 && 'Shoes') || 'Clothing',
}));

/** **************************************
 * Products with pagination and filters
 *************************************** */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const pageParam = searchParams.get('page') ?? `${DEFAULT_PAGE}`;
  const perPageParam = searchParams.get('perPage') ?? `${DEFAULT_PER_PAGE}`;

  const page = parseInt(pageParam, 10);
  const perPage = parseInt(perPageParam, 10);
  const search = searchParams.get('search') ?? '';
  const category = searchParams.get('category') ?? '';

  try {
    const filteredProducts = filterProducts(_products, search, category);
    const paginatedProducts = paginateProducts(filteredProducts, page, perPage);

    const totalPages = Math.ceil(filteredProducts.length / perPage);
    const totalItems = filteredProducts.length;

    return response(
      {
        products: paginatedProducts,
        totalPages,
        totalItems,
        categoryOptions: uniq(_products.map((product) => product.category)),
      },
      STATUS.OK
    );
  } catch (error) {
    return handleError('Pagination - Get list of products', error);
  }
}

// ----------------------------------------------------------------------

function paginateProducts(products: typeof _products, page: number, perPage: number) {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  return products.slice(startIndex, endIndex);
}

function filterProducts(products: typeof _products, searchQuery: string, category: string) {
  return products.filter(({ id, name, category: productCategory }) => {
    const matchesSearch = searchQuery
      ? [id, name].some((field) => field.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;

    const matchesCategory = category ? productCategory === category : true;

    return matchesSearch && matchesCategory;
  });
}
