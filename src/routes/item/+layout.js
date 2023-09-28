export const load = async ( loadEvent ) =>
{
  const { fetch, parent } = loadEvent
  const parentData = await parent()
  const { username } = parentData
  const title = "Featured Items"
  const res = await fetch( "http://localhost:3000/featured-items" )
  const featuredItems = await res.json()
  return {
    username,
    title,
    featuredItems,
  }
}