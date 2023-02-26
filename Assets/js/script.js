async function getProdutos() {
    let response = await fetch(`http://localhost:3000/produtos`);
    let userData = await response.json();
    const produtoId = userData;
    console.log(userData[1]);
    
}
   getProdutos();