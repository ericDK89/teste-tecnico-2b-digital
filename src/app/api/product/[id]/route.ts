/**
 * GET function to retrieve data.
 * @param {Request} request - The request object.
 * @return {Response} The response object.
 */
export async function GET(request: Request, {params}: any): Promise<Response> {
  const {id} = params;

  const res = await fetch(`http://localhost:5432/products/${id}`, {
    next: {
      revalidate: 1,
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  const data = await res.json();

  return Response.json({data});
}
