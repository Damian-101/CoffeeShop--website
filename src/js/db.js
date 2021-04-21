const ourRequest =  new XMLHttpRequest();
ourRequest.open("GET","http://localhost:3000/api/items");
ourRequest.onload = () => {
    console.log(ourRequest.responseText)
}
ourRequest.send()