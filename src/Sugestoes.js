export default function Sugestoes (){

  const sugs = [
    {imagem:"assets/img/mario.jpeg", nome:"Mario_itsame", razao:"Segue você"},
    {imagem: "assets/img/crash.jpeg", nome:"Crash", razao:"Segue você"},
    {imagem:"assets/img/leon.jpeg",nome:"Leon_kennedy", razao:"Novo no Instagram"},
    {imagem:"assets/img/tomnook.jpeg", nome:"TomNook_PAYUP", razao:"Segue você" },
    {imagem: "assets/img/chikorita.jpeg", nome:"Chikorita", razao:"Segue você"}
  ]
  
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugs.map((item)=>{
        return(
          <Sugestao imagem={item.imagem} nome={item.nome} razao={item.razao}/>
        )
      })}
    </div>
  )
  }
  

 function Sugestao (props) {
    return (
           <div class="sugestao">
            <div class="usuario">
              <img src={props.imagem} />
              <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.razao}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>    
    )
}