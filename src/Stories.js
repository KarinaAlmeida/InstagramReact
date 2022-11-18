
const contStories = [
  {imagem: "assets/img/9gag.svg", nome:"9gag"},
  {imagem:"assets/img/meowed.svg", nome:"meowed"},
  {imagem: "assets/img/barked.svg", nome: "barked"},
  {imagem:"assets/img/nathanwpylestrangeplanet.svg", nome: "nathanwpylestrangeplanet"},
  {imagem:"assets/img/wawawicomics.svg", nome:"wawawicomics" },
  {imagem:"assets/img/respondeai.svg", nome:"respondeai"},
  {imagem:"assets/img/filomoderna.svg", nome: "filomoderna" },
  {imagem:"assets/img/memeriagourmet.svg", nome:"memeriagourmet"},
 
]

export default function Stories () {

    return (
        <div class="stories">

        {contStories.map((itens)=> (
            <div class="story">
           <div class="imagem">
            <img src={itens.imagem} />
          </div>
          <div class="usuario">
            {itens.nome}
          </div>
        </div> 
      )
          )
      }
        
       

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>

    )
}