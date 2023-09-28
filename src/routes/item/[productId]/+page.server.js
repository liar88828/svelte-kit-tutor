import { error, redirect } from "@sveltejs/kit"

export const load = async ( serverLoadEvent ) =>
{
  const { fetch, params } = serverLoadEvent
  const { productId } = params
  if ( productId > 3 )
  {
    // throw new Error( `Product is not found` )
    // throw error( 404, {
    //   message: `Product is not found`,
    //   hint: "try a different product"
    // } )

    throw redirect( 307, "/item" )
  }
  const res = await fetch( `http://localhost:3000/items/${ productId }` )
  const items = await res.json()
  const title = "List of available Items data"
  const notification = "End od session sale 50% off!"

  return {
    title,
    items,
    notification
    // Component: Item // cannot be rendered
  }
}
export const prerender = "auto"