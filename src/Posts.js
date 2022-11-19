import React from 'react';

export default function Posts (){

const postCont =[
  {imagem:"assets/img/nate.jpeg", nome:"nathan_drake", img:"assets/img/natebro.jpeg", imglike:"assets/img/jin.jpeg", nomelike:"Sakai_jin", numlike:101.523},
  {imagem:"assets/img/kratos.jpeg", nome:"Kratos.god", img:"assets/img/paiefilho.jpeg", imglike:"assets/img/sam.jpeg", nomelike:"Sam.pontes", numlike:99.565},
  {imagem:"assets/img/jin.jpeg", nome:"Sakai_jin", img:"assets/img/jinfoto.jpeg", imglike:"assets/img/moira.jpeg", nomelike:"Moira", numlike:110.842}
]
  return (
    <div class="posts">
      {postCont.map((item)=> (
    <Post imagem={item.imagem} nome={item.nome} img={item.img} imglike={item.imglike} nomelike={item.nomelike} numlike={item.numlike}/>
    ))}
      </div>
  )

}



function Post (props){
  let [heart, setHeart] = React.useState(true)
  let [bookmark, setBookmark] = React.useState(true)


    return (
          <div class="post" data-test="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.imagem} />
                {props.nome}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img onDoubleClick={()=>{setHeart(false)}} src={props.img}  data-test="post-image" />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon onClick={()=>{setHeart(!heart)}} class={(heart===true) ? "normal" : "red"} name={(heart===true) ? "heart-outline" : "heart"} data-test="like-post"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon onClick={() => {setBookmark(!bookmark) }} name={(bookmark === true) ? "bookmark-outline" : "bookmark"} data-test="save-post"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imglike} />
                <div class="texto">
                  Curtido por <strong>{props.nomelike}</strong> e <strong>outras {(heart===true) ? props.numlike: props.numlike +0.001 } pessoas</strong>
                </div>
              </div>
            </div>
          </div>
         

    )
}