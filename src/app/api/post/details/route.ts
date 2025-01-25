import type { NextRequest } from 'next/server';

import { kebabCase } from 'es-toolkit';

import { STATUS, response, handleError } from 'src/utils/response';

import { _posts } from 'src/_mock/_blog';

// ----------------------------------------------------------------------

export const runtime = 'edge';

/** **************************************
 * Get post details
 *************************************** */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const title = searchParams.get('title');

    const posts = _posts();

    const post = posts.find((_post) => kebabCase(_post.title) === title);

    if (!post) {
      return response({ message: 'Post not found!' }, STATUS.NOT_FOUND);
    }

    return response({ post }, STATUS.OK);
  } catch (error) {
    return handleError('Post - Get details', error);
  }
}
