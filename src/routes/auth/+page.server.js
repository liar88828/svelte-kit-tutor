import { fail, redirect } from "@sveltejs/kit"

export const actions = {
  login: async ( { request, cookies, url } ) =>
  {
    const data = await request.formData()
    const username = data.get( "username" )
    const password = data.get( "password" )

    if ( !username || !password )
    {
      return fail( 400, {
        username,
        message: "Invalid username or password"
      } )
      // return json( {
      //   message: "Missing username and password"
      // } )
    }
    cookies.set( "username", username, { path: "/" } )
    throw redirect( 303, url.searchParams.get( "redirectTo" ) || "/" )
    // return { message: "logged in" }
  },

  register: async ( { request, cookies } ) =>
  {
    const data = await request.formData()
    const username = data.get( "username" )
    const password = data.get( "password" )

    if ( !username || !password )
    {
      return fail( 400, {
        username,
        message: "Invalid username or password"
      } )
      // return json( {
      //   message: "Missing username and password"
      // } )
    }
    cookies.set( "register", username, { path: "/" } )
    return { message: "Success Register..." }
  }
}