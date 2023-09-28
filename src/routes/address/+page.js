export const load = async ( loadEvent ) =>
{
  const { fetch } = loadEvent
  const res = await fetch( "api/postcodes" )
  const postcodes = await res.json()
  const addressList = postcodes.map( p =>
  {
    return `${ p.building }, ${ p.line1 } ${ p.line2 } ${ p.line3 } `
  } )
  return { addressList }
}