import { comments } from "$lib/comment";
import { json } from "@sveltejs/kit";

export function GET ( requestEvent ) 
{
  const { params } = requestEvent
  const { commentId } = params
  const comment = comments.find( c => c.id === parseInt( commentId ) )
  return json( comment )
}

export async function PATCH ( requestEvent ) 
{
  const { params, request } = requestEvent
  const { text } = await request.json()
  const { commentId } = params
  const comment = comments.find( c => c.id === parseInt( commentId ) )
  comment.text = text
  return json( comment )
}

