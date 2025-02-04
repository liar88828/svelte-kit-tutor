// import Item from "./Item.svelte";

export const load = async ( loadEvent ) =>
{
  console.log( "load function called in page.server.js" );
  const { fetch } = loadEvent
  const res = await fetch( "http://localhost:3000/items" )
    .then( ( d ) => d.json() )
  // const items = await res.json()
  const title = "List of available Items data"
  return {
    title,
    items: res,
    // Component: Item // cannot be rendered
  }
}


