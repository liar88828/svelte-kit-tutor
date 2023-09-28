import { json } from "@sveltejs/kit"

export async function GET ()
{
  const response = await fetch( "http://localhost:3000/postcodes" )
  const postcodes = await response.json()
  const appPostCodes = postcodes.map( p =>
  {
    return {
      building: p.building_name,
      line1: p.line_1,
      line2: p.line_2,
      line3: p.line_3,
      town: p.post_town,
      country: p.country,
      postcode: p.postcode
    }
  } )
  return json( appPostCodes )
}