
import { PUBLIC_BASE_URL_DB } from "$env/static/public"
export const load = () =>
{
  console.log( `Connecting to database... user ${ PUBLIC_BASE_URL_DB } ` );
  return {}
}