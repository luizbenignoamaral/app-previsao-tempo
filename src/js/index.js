const chaveDaApi = "986a3cee100145cfb47131001232812";

const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", () => {
    const cidade = document.getElementById("input-busca").value;
   
    const dados = buscarDadosDaCidade (cidade);

});

function buscarDadosDaCidade(cidade){
    const apiUrl = `https://api.weatherapi.com/v1.current.jason?
    key= ${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;

    


}





