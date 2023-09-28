import { json } from "@sveltejs/kit"

export const actions = {
  login: async ( { request, cookies } ) =>
  {
    const data = await request.formData()
    const username = data.get( "username" )
    const password = data.get( "password" )

    if ( !username || !password )
    {
      return json( {
        message: "Missing username and password"
      } )
    }
    cookies.set( "username", username, { path: "/" } )
    return { message: "logged in" }
  },

  register: async ( { request, cookies } ) =>
  {
    const data = await request.formData()
    const username = data.get( "username" )
    const password = data.get( "password" )

    if ( !username || !password )
    {
      return json( {
        message: "Missing username and password"
      } )
    }
    cookies.set( "register", username, { path: "/" } )
    return { message: "Success Register..." }
  }
}