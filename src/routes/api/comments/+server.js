
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


export async function POST ( requestEvent )
{
  const { request } = requestEvent;
  const { text } = await request.json()
  const newComment = {
    id: comments.length + 1,
    text
  }
  comments.push( newComment )
  return json( comments, { status: 201 } );
}

