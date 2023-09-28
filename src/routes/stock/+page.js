export const load = async ( { fetch, depends } ) =>
{
  depends( "stocks:actively-trading" )// maka di +page.svelte invalidate hanya menuliskan seperti di depends   
  const stocks = await fetch( "http://localhost:3000/stocks" )

  return {
    stocks: stocks.json()
  }
}