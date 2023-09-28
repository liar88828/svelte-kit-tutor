export const load = async ( { fetch } ) =>
{
  const mostActive = await fetch( "http://localhost:3000/most-active-stock" )
  const topGaining = await fetch( "http://localhost:3000/top-gaining-stock" )
  const topLosing = await fetch( "http://localhost:3000/top-losing-stock" )
  // const mostActiveStock = mostActive.json()
  // const topGainingStock = topGaining.json()
  // const topLosingStock = topLosing.json()
  return {
    // mostActive: mostActiveStock,
    // topGaining: topGainingStock,
    // topLosing: topLosingStock
    mostActive: mostActive.json(),
    topGaining: topGaining.json(),
    topLosing: topLosing.json()
  }
}