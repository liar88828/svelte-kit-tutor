 <script>
  export let data
 </script>

 <span>Most active stock - {data.mostActive.symbol}</span>
 <span>Most gaining stock - {data.topGaining.symbol}</span>
 <span>Most losing stock - {data.topLosing.symbol}</span>


 <style>
  span{
    margin-right: 2rem;
    font-size: 2rem;
  }
 </style>