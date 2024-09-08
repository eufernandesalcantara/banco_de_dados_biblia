function pesquisar() {

    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>não buscou os dados corretamente</p>";
  }


    console.log(campoPesquisa);
        if (campoPesquisa == "") {
            section.innerHTML = "<p>nada foi encontrado</p>";
            return
        }
            campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada livro nos dados
    for (let dado of dados) {
        // se titulo  includes 
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) ||
        descricao.includes(campoPesquisa) ||
        tags.includes(campoPesquisa)){
       //console.log(dado.titulo.includes(campoPesquisa))
      // Cria uma nova div para cada livro, formatando o HTML com template literals
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;}

      if (!resultados) {
          section.innerHTML = "<p>nada foi encontrado</p>";
    }

    }
  
    // Atualiza o conteúdo HTML da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }
