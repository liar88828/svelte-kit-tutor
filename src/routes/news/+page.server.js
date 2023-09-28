import { redirect } from "@sveltejs/kit";

export const load = ( { cookies, url }
) =>
{
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

