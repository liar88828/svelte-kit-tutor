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

export async function DELETE ( requestEvent ) 
{
  const { params } = requestEvent
  const { commentId } = params
  // const deletes = comments.filter( c => c.id !== parseInt( commentId ) )
  // ----
  const deleteComment = comments.find( c => c.id === parseInt( commentId ) )
  const index = comments.findIndex( c => c.id === parseInt( commentId ) )
  console.log();
  comments.splice( index, 1 )
  return json( deleteComment )

  // --------
  // const id = comments.findIndex( c => c.id === parseInt( commentId ) )
  // console.log( id );
  // delete comments[ id ]
  // return json( comments )
}
