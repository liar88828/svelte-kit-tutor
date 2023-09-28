import Item from "./Item.svelte";

export const load = async ( loadEvent ) =>
{
  console.log( "load function called in page.js" );

  const { data } = loadEvent
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

export const prerender = true
// export const ssr = true
// export const csr = true
