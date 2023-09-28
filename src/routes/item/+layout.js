export const load = async ( loadEvent ) =>
{
  const { fetch } = loadEvent
  const title = "Featured Items"
  const res = await fetch( "http://localhost:3000/featured-items" )
  const featuredItems = await res.json()
  return {
    title,
    featuredItems,
  }
}