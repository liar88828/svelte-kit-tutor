export async function GET ()
{
  console.log( "current-time -GET handler involve" );

  return new Response( new Date().toLocaleTimeString() )
}

// export const prerender = true// not be render again 