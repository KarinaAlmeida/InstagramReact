const postCont =[
  {imagem:"assets/img/meowed.svg", nome:"meowd", img:"assets/img/gato-telefone.svg", imglike:"assets/img/respondeai.svg", nomelike:"respondeai", numlike:"outras 101.523 pessoas"},
  {imagem:"assets/img/barked.svg", nome:"barked", img:"assets/img/dog.svg", imglike:"assets/img/adorable_animals.svg", nomelike:"adorable_animals", numlike:"outras 99.159 pessoas"}
]




export default function Posts (){

    return (
        <div class="posts">

        {postCont.map((item)=> ( 
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={item.imagem} />
                {item.nome}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={item.img} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={item.imglike} />
                <div class="texto">
                  Curtido por <strong>{item.nomelike}</strong> e <strong>{item.numlike}</strong>
                </div>
              </div>
            </div>
          </div>
          ))}

        </div>
    )
}