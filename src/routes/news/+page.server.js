import { redirect } from "@sveltejs/kit";
import { secretKey } from "$lib/server/secrets";
// can because is on server side

export const load = ( { cookies, url }
) =>
{
  console.log( secretKey );
  // console.log( `Connecting to database... user ${ DB_USER } and pass ${ DB_PASSWORD }` );
  if ( !cookies.get( "username" ) )
  {
    throw redirect( 307, `/auth?redirectTo=${ url.pathname }` )
  }
  const newApiKey = "your_api_key"
  console.log( newApiKey );


  const news = [
    { id: 1, title: "News 1" }
    , { id: 2, title: "News 2" }
    , { id: 3, title: "News 3" }
  ]
  return { news }
}

