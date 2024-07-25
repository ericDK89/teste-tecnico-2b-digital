/**
 * GET function to retrieve data.
 * @param {Request} request - The request object.
 * @return {Response} The response object.
 */
export async function GET(request: Request, {params}: any): Promise<Response> {
  const {id} = params;

  const res = await fetch(`https://teste-tecnico-2b-digital-ldiq-git-main-ericdk89s-projects.vercel.app/products/${id}`, {
    method: 'GET',
    next: {
      revalidate: 24 * 60 * 60,
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
    },
  });

  const data = await res.json();

  return Response.json({data});
}
