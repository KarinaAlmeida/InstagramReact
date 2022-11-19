


export default function Stories () {
  const contStories = [
  {imagem: "assets/img/nate.jpeg", nome:"nathan_drake"},
  {imagem:"assets/img/sora.jpeg", nome:"Sora"},
  {imagem: "assets/img/kratos.jpeg", nome: "Kratos.god"},
  {imagem:"assets/img/zelda.jpeg", nome: "zelda_princess"},
  {imagem:"assets/img/moira.jpeg", nome:"Moira.DPS" },
  {imagem:"assets/img/celeste.jpeg", nome:"celeste"},
  {imagem:"assets/img/jin.jpeg", nome: "Sakai_jin" },
  {imagem:"assets/img/sam.jpeg", nome:"Sam.pontes"},
 
]

return (
    <div class="stories">
    {contStories.map((itens)=> (
    <Story imagem={itens.imagem} nome={itens.nome}/>
    ))}
    
    
      <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
)}


 function Story (props) {

    return (
            <div class="story">
           <div class="imagem">
            <img src={props.imagem} />
          </div>
          <div class="usuario">
            {props.nome}
          </div>
        </div> 
      );
    
      }
        
      