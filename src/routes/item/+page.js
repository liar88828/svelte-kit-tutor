import Item from "./Item.svelte";

export const load = async ( loadEvent ) =>
{
  const { fetch, data } = loadEvent
  // const res = await fetch( "http://localhost:3000/items" )
  // const items = await res.json()
  // const title = "List of available Items data"
  const notification = "End od session sale"
  return {
    // title,
    // items
    ...data,// from server load function
    Component: Item,
    notification
  }
}