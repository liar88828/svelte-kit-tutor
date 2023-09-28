
export const load = async ( serverLoadEvent ) =>
{
  const { fetch, params } = serverLoadEvent
  const { productId } = params
  console.log( productId );
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