import React from "react";


export default function Usuario () {
  const [usuario, setUsuario] = React.useState("Karina");
  const [imagemUsuario, setImagemUsuario] = React.useState("assets/img/ka.jpeg");
  


  function novoNome(){
    const nome = prompt("Qual o seu nome?");
    if (nome){
      return setUsuario(nome)
    }
    }

    function novaImagem(){
      const linkImagem= prompt ("Insira o link da sua imagem!")
      if (linkImagem){
        return setImagemUsuario(linkImagem)
      }
    }


    function Usuario(props){
    return (
        <div class="usuario" data-test="user">
          <img src={imagemUsuario} onClick={novaImagem} data-test="profile-image"/>
          <div class="texto" data-test="name">
            <strong>HaveUMetKarina</strong>
            <span>
              {props.usuario} 
              <ion-icon name="pencil" onClick={novoNome} data-test="edit-name" ></ion-icon>
            </span>
          </div>
        </div>
    )
    }
    return (
      <Usuario usuario={usuario} />
  )
}


