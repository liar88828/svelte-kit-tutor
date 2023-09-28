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
  console.log( items );
  const title = "List of available Items data"
  return {
    title,
    items
    // Component: Item // cannot be rendered
  }
}