
import { PUBLIC_BASE_URL_DB } from "$env/static/public"
// import { secretKey } from "$lib/server/secrets"; //error because is on server side/component
export const load = () =>
{
  console.log( `Connecting to database... user ${ PUBLIC_BASE_URL_DB } ` );
  return {}
}