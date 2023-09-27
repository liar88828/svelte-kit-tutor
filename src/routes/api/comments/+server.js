
import { json } from "@sveltejs/kit";
import { comments } from "$lib/comment";


export function GET ()
{
  // return new Response(
  //   JSON.stringify( comments ),
  //   { headers: { "Content-Type": "application/json" } }
  // )
  return json( comments );
}