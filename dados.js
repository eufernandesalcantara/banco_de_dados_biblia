// bancos de dados 
// velho testamento
let dados = [
    {
        titulo: "Gênesis",
        descricao: "O livro do início. Narra a criação do mundo, a história de Adão e Eva, o dilúvio, a história dos patriarcas (Abraão, Isaac e Jacó) e a chegada de Jacó e sua família no Egito.",
        link: "https://pt.wikipedia.org/wiki/G%C3%AAnesis",
        tags: "vida gen abel enoque criação, paraíso, pecado, dilúvio, patriarcas, alianças velho testamento",
    },
    {
        titulo: "Êxodo",
        descricao: "Narra a libertação dos israelitas do Egito, a travessia do Mar Vermelho e a entrega das Tábuas da Lei no Monte Sinai.",
        link: "https://pt.wikipedia.org/wiki/%C3%89xodo",
        tags: "escravidão, libertação, deserto, lei, tabuas da lei velho testamento"
    },
    {
        titulo: "Levíticos",
        descricao: "Contém as leis e regulamentos religiosos para o povo de Israel, incluindo os sacrifícios, a pureza ritual e a organização do sacerdócio levítico.",
        link: "https://pt.wikipedia.org/wiki/Lev%C3%ADticos",
        tags: "culto, sacrifício, pureza, lei ritual velho testamento"
    },
    {
        titulo: "Números",
        descricao: "Narra a jornada dos israelitas pelo deserto, os censos, as revoltas e as leis dadas por Moisés.",
        link: "https://pt.wikipedia.org/wiki/N%C3%BAmeros",
        tags: "deserto, censo, revolta, Moisés velho testamento"
    },
    {
        titulo: "Deuteronômio",
        descricao: "Contém os discursos de Moisés ao povo de Israel antes de sua morte, relembrando a história e as leis, e preparando o povo para a entrada em Canaã.",
        link: "https://pt.wikipedia.org/wiki/Deuteron%C3%B4mio",
        tags: "lei, promessa, Canaã, despedida velho testamento"
    },
    {
        titulo: "Josué",
        descricao: "Narra a conquista da Terra Prometida (Canaã) pelos israelitas após a morte de Moisés, sob a liderança de Josué.",
        link: "https://pt.wikipedia.org/wiki/Josu%C3%A9_(livro_bíblico)",
        tags: "conquista, Canaã, Josué velho testamento"
    },
    {
        titulo: "Juízes",
        descricao: "Relata o período entre a conquista de Canaã e o estabelecimento da monarquia em Israel, marcado por ciclos de apostasia, opressão e libertação velho testamento.",
        link: "https://pt.wikipedia.org/wiki/Ju%C3%ADzes",
        tags: "juízes, apostasia, libertação"
    },
    {
        titulo: "Rute",
        descricao: "Uma história de amor e lealdade, que narra a história de Rute, uma moabita que se casa com um israelita e se torna ancestral de Davi.",
        link: "https://pt.wikipedia.org/wiki/Rute",
        tags: "amor, lealdade, ancestralidade velho testamento"
    },
    {
        titulo: "1 Samuel",
        descricao: "Narra a história de Samuel, Saul e Davi, desde a infância de Samuel até a ascensão de Davi como rei de Israel.",
        link: "https://pt.wikipedia.org/wiki/I_Samuel",
        tags: "Samuel, Saul, Davi, realeza velho testamento"
    },
    {
        titulo: "2 Samuel",
        descricao: "Continua a narrativa da vida de Davi, desde sua ascensão ao trono até sua morte, abordando temas como pecado, arrependimento e as consequências de suas ações.",
        link: "https://pt.wikipedia.org/wiki/II_Samuel",
        tags: "Davi, pecado, arrependimento velho testamento"
    },
    {
        titulo: "1 Reis",
        descricao: "Narra a história de Salomão, a divisão do reino de Israel e a história dos primeiros reis de Israel e Judá.",
        link: "https://pt.wikipedia.org/wiki/I_Reis",
        tags: "Salomão, divisão do reino, reis velho testamento"
    },
    {
        titulo: "2 Reis",
        descricao: "Continua a história dos reis de Israel e Judá, abordando temas como profetas, juízos de Deus e a queda de ambos os reinos.",
        link: "https://pt.wikipedia.org/wiki/II_Reis",
        tags: "profetas, juízos, queda dos reinos velho testamento"
    },
    {
        titulo: "1 Crônicas",
        descricao: "Relata a história de Israel desde a criação até a divisão do reino, com foco na linhagem de Davi e na construção do Templo.",
        link: "https://pt.wikipedia.org/wiki/I_Crônicas",
        link: "https://pt.wikipedia.org/wiki/I_Cr%C3%B4nicas",
        tags: "história de Israel, Davi, Templo velho testamento"
    },
    {
        titulo: "2 Crônicas",
        descricao: "Continua a história de Israel e Judá, com foco nos reis de Judá e na história do Templo.",
        link: "https://pt.wikipedia.org/wiki/II_Crônicas",
        tags: "reis de Judá, Templo velho testamento"
    },
    {
        titulo: "Esdras",
        descricao: "Narra o retorno dos exilados judeus de Babilônia e a reconstrução de Jerusalém e do Templo.",
        link: "https://pt.wikipedia.org/wiki/Esdras",
        tags: "exílio, reconstrução, Jerusalém velho testamento"
    },
    {
        titulo: "Neemias",
        descricao: "Narra a reconstrução dos muros de Jerusalém sob a liderança de Neemias e o reavivamento espiritual do povo.",
        link: "https://pt.wikipedia.org/wiki/Neemias",
        tags: "reconstrução, muros de Jerusalém, reavivamento velho testamento"
    },
    {
        titulo: "Ester",
        descricao: "Conta a história de Ester, uma judia que se torna rainha da Pérsia e salva o povo judeu de um genocídio.",
        link: "https://pt.wikipedia.org/wiki/Ester",
        tags: "Ester, Pérsia, genocídio velho testamento"
    },
    {
        titulo: "Jó",
        descricao: "Um livro poético que explora os temas do sofrimento, justiça divina e a fé em Deus.",
        link: "https://pt.wikipedia.org/wiki/Jó",
        tags: "sofrimento, justiça divina, fé velho testamento"
    },
    {
        titulo: "Salmos",
        descricao: "Uma coleção de hinos e orações que expressam a fé, a esperança e os sentimentos do povo de Israel.",
        link: "https://pt.wikipedia.org/wiki/Salmos",
        tags: "hinos, orações, fé velho testamento"
    },
    {
        titulo: "Provérbios",
        descricao: "Uma coleção de provérbios e conselhos práticos para a vida.",
        link: "https://pt.wikipedia.org/wiki/Provérbios",
        tags: "sabedoria, conselhos, provérbios velho testamento"
    },
    {
        titulo: "Eclesiastes",
        descricao: "Uma reflexão sobre a futilidade da vida e a busca por significado.",
        link: "https://pt.wikipedia.org/wiki/Eclesiastes",
        tags: "futilidade, significado da vida velho testamento"
    },
    {
        titulo: "Cantares",
        descricao: "Um poema de amor que celebra a união entre Deus e seu povo, ou entre um homem e uma mulher.",
        link: "https://pt.wikipedia.org/wiki/Cantares",
        tags: "amor, poesia velho testamento"
    },
    {
        titulo: "Isaías",
        descricao: "Um dos maiores profetas, Isaías profetizou sobre o Messias, o julgamento de Judá e a restauração de Israel.",
        link: "https://pt.wikipedia.org/wiki/Isaías",
        tags: "Messias, julgamento, restauração velho testamento"
    },
    {
        titulo: "Jeremias",
        descricao: "Conhecido como o 'profeta chorão', Jeremias profetizou a queda de Jerusalém e o exílio babilônico.",
        link: "https://pt.wikipedia.org/wiki/Jeremias",
        tags: "exílio, queda de Jerusalém velho testamento"
    },
    {
        titulo: "Lamentações",
        descricao: "Um lamento sobre a destruição de Jerusalém e o exílio do povo.",
        link: "https://pt.wikipedia.org/wiki/Lamentações",
        tags: "lamento, destruição de Jerusalém velho testamento"
    },
    {
        titulo: "Ezequiel",
        descricao: "Profeta exilado em Babilônia, Ezequiel recebeu visões gloriosas sobre a restauração de Israel.",
        link: "https://pt.wikipedia.org/wiki/Ezequiel",
        tags: "visões, restauração velho testamento"
    },
    {
        titulo: "Daniel",
        descricao: "Um profeta e sábio na corte babilônica, Daniel interpretou sonhos e visões proféticas sobre o futuro.",
        link: "https://pt.wikipedia.org/wiki/Daniel",
        tags: "profecias, sonhos, Babilônia velho testamento"
    },
    {
        titulo: "Oséias",
        descricao: "Profeta que usou a metáfora do casamento para ilustrar a relação infiel de Israel com Deus.",
        link: "https://pt.wikipedia.org/wiki/Oséias",
        tags: "infidelidade, amor de Deus velho testamento"
    },
    {
        titulo: "Joel",
        descricao: "Profetizou sobre um dia de juízo e um derramamento do Espírito Santo.",
        link: "https://pt.wikipedia.org/wiki/Joel",
        tags: "juízo, derramamento do Espírito velho testamento"
    },
    {
        titulo: "Amós",
        descricao: "Condenou a injustiça social e a idolatria em Israel, profetizando a queda de várias nações.",
        link: "https://pt.wikipedia.org/wiki/Amós",
        tags: "injustiça social, idolatria, queda das nações velho testamento"
    },
    {
        titulo: "Obadias",
        descricao: "O livro mais curto da Bíblia, profetiza a queda de Edom.",
        link: "https://pt.wikipedia.org/wiki/Obadias",
        tags: "Edom, queda, velho testamento"
    },
    {
        titulo: "Jonas",
        descricao: "A história de Jonas, que fugiu da presença de Deus e foi enviado para pregar aos ninivitas.",
        link: "https://pt.wikipedia.org/wiki/Jonas",
        tags: "missão, arrependimento, Nínive velho testamento"
    },
    {
        titulo: "Miquéias",
        descricao: "Condenou a injustiça social e a idolatria em Israel, profetizando a destruição de Samaria e Jerusalém.",
        link: "https://pt.wikipedia.org/wiki/Miquéias",
        tags: "injustiça social, idolatria, destruição velho testamento"
    },
    {
        titulo: "Naum",
        descricao: "Anuncia a queda de Nínive, capital do império assírio.",
        link: "https://pt.wikipedia.org/wiki/Naum",
        tags: "Nínive, queda velho testamento"
    },
    {
        titulo: "Habacuque",
        descricao: "Um profeta que questiona a Deus sobre o sofrimento do justo e recebe respostas sobre a justiça divina.",
        link: "https://pt.wikipedia.org/wiki/Habacuque",
        tags: "sofrimento, justiça divina velho testamento"
    },
    {
        titulo: "Sofonias",
        descricao: "Anuncia o dia do Senhor, um dia de juízo e purificação.",
        link: "https://pt.wikipedia.org/wiki/Sofonias",
        tags: "dia do Senhor, juízo, purificação velho testamento"
    },
    {
        titulo: "Ageu",
        descricao: "Exorta o povo judeu a reconstruir o Templo em Jerusalém após o exílio.",
        link: "https://pt.wikipedia.org/wiki/Ageu",
        tags: "reconstrução do Templo, exílio velho testamento"
    },
    {
        titulo: "Zacarias",
        descricao: "Profeta que viu visões sobre a restauração de Jerusalém e a vinda do Messias.",
        link: "https://pt.wikipedia.org/wiki/Zacarias",
        tags: "restauração, Messias velho testamento"
    },
    {
        titulo: "Malaquias",
        descricao: "O último profeta do Antigo Testamento, fala sobre a vinda de um mensageiro antes do dia do Senhor.",
        link: "https://pt.wikipedia.org/wiki/Malaquias",
        tags: "mensageiro, dia do Senhor velho testamento"
    },
    // Início do Novo Testamento
    {
        titulo: "Mateus",
        descricao: "Um dos quatro Evangelhos, apresenta Jesus como o rei judeu que cumpriu as profecias do Antigo Testamento.",
        link: "https://pt.wikipedia.org/wiki/Mateus",
        tags: "evangelho, rei judeu, Antigo Testamento Novo Testamento"
    },
    {
        titulo: "Marcos",
        descricao: "O evangelho mais curto, enfatiza a ação de Jesus e sua identidade como Filho de Deus.",
        link: "https://pt.wikipedia.org/wiki/Marcos",
        tags: "evangelho, Filho de Deus Novo Testamento"
    },
    {
        titulo: "Lucas",
        descricao: "Um relato detalhado da vida de Jesus, com foco em sua humanidade e compaixão.",
        link: "https://pt.wikipedia.org/wiki/Lucas",
        tags: "evangelho, humanidade, compaixão Novo Testamento"
    },
    {
        titulo: "João",
        descricao: "Um evangelho teológico que enfatiza a divindade de Jesus e seu papel como a Palavra de Deus.",
        link: "https://pt.wikipedia.org/wiki/João",
        tags: "evangelho, divindade, Palavra de Deus Novo Testamento"
    },
    {
        titulo: "Atos dos Apóstolos",
        descricao: "Narra a história da igreja primitiva, desde o Pentecostes até a chegada de Paulo em Roma.",
        link: "https://pt.wikipedia.org/wiki/Atos_dos_Apóstolos",
        tags: "igreja primitiva, Pentecostes, Paulo Novo Testamento"
    },
    {
        titulo: "Romanos",
        descricao: "Uma das principais epístolas de Paulo, explora a doutrina da justificação pela fé.",
        link: "https://pt.wikipedia.org/wiki/Romanos",
        tags: "justificação pela fé, Paulo Novo Testamento"
    },
    {
        titulo: "1 Coríntios",
        descricao: "Paulo escreve aos cristãos de Corinto, abordando questões como divisões na igreja, dons espirituais e a ressurreição.",
        link: "https://pt.wikipedia.org/wiki/1_Coríntios",
        tags: "Corinto, dons espirituais, ressurreição Novo Testamento"
    },
    {
        titulo: "2 Coríntios",
        descricao: "A segunda carta de Paulo aos coríntios, abordando temas como sofrimento, ministério e a nova aliança.",
        link: "https://pt.wikipedia.org/wiki/2_Coríntios",
        tags: "sofrimento, ministério, nova aliança Novo Testamento"
    },
    {
        titulo: "Gálatas",
        descricao: "Paulo combate a legalista doutrina da circuncisão, enfatizando a salvação pela fé em Cristo.",
        link: "https://pt.wikipedia.org/wiki/Gálatas",
        tags: "circuncisão, fé em Cristo Novo Testamento"
    },
    {
        titulo: "Efésios",
        descricao: "Uma carta que destaca a unidade da igreja e o plano de Deus para a humanidade.",
        link: "https://pt.wikipedia.org/wiki/Efésios",
        tags: "unidade da igreja, plano de Deus Novo Testamento"
    },
    {
        titulo: "Filipenses",
        descricao: "Uma carta encorajadora escrita por Paulo durante o seu encarceramento.",
        link: "https://pt.wikipedia.org/wiki/Filipenses",
        link: "https://pt.wikipedia.org/wiki/Filipenses",
        tags: "encorajamento, encarceramento Novo Testamento"
    },
    {
        titulo: "Colossenses",
        descricao: "Paulo escreve aos colossenses sobre a superioridade de Cristo e adverte contra falsas doutrinas.",
        link: "https://pt.wikipedia.org/wiki/Colossenses",
        tags: "superioridade de Cristo, falsas doutrinas Novo Testamento"
    },
    {
        titulo: "1 Tessalonicenses",
        descricao: "Paulo elogia a fé dos tessalonicenses e os exorta a perseverar na santidade.",
        link: "https://pt.wikipedia.org/wiki/1_Tessalonicenses",
        tags: "fé, santidade Novo Testamento"
    },
    {
        titulo: "2 Tessalonicenses",
        descricao: "Paulo escreve sobre a volta de Cristo e adverte contra falsos ensinos.",
        link: "https://pt.wikipedia.org/wiki/2_Tessalonicenses",
        tags: "volta de Cristo, falsos ensinos Novo Testamento"
    },
    {
        titulo: "1 Timóteo",
        descricao: "Paulo dá instruções a Timóteo sobre como liderar a igreja em Éfeso.",
        link: "https://pt.wikipedia.org/wiki/1_Timóteo",
        tags: "liderança, Éfeso Novo Testamento"
    },
    {
        titulo: "2 Timóteo",
        descricao: "Paulo exorta Timóteo a permanecer fiel à doutrina e a enfrentar as dificuldades do ministério.",
        link: "https://pt.wikipedia.org/wiki/2_Timóteo",
        tags: "fidelidade, dificuldades do ministério Novo Testamento"
    },
    {
        titulo: "Tito",
        descricao: "Paulo instrui Tito sobre como organizar as igrejas em Creta.",
        link: "https://pt.wikipedia.org/wiki/Tito",
        tags: "organização da igreja, Creta Novo Testamento"
    },
    {
        titulo: "Filemom",
        descricao: "Uma carta pessoal de Paulo a Filemom, pedindo que perdoe a Onesímo, um escravo fugido.",
        link: "https://pt.wikipedia.org/wiki/Filemom",
        tags: "perdão, escravidão Novo Testamento"
    },
    {
        titulo: "Hebreus",
        descricao: "Uma epístola que exorta os cristãos a permanecerem firmes na fé em Jesus Cristo, o sumo sacerdote.",
        link: "https://pt.wikipedia.org/wiki/Hebreus",
        tags: "fé em Cristo, sumo sacerdote Novo Testamento"
    },
    {
        titulo: "Tiago",
        descricao: "Uma carta que enfatiza a fé que se expressa em ações e a importância da perseverança.",
        link: "https://pt.wikipedia.org/wiki/Tiago",
        tags: "fé e obras, perseverança Novo Testamento"
    },
    {
        titulo: "1 Pedro",
        descricao: "Pedro exorta os cristãos a viverem vidas santas em meio à perseguição.",
        link: "https://pt.wikipedia.org/wiki/1_Pedro",
        tags: "vida santa, perseguição Novo Testamento"
    },
    {
        titulo: "2 Pedro",
        descricao: "Pedro adverte contra falsos profetas e exorta os cristãos a crescerem em graça e conhecimento.",
        link: "https://pt.wikipedia.org/wiki/2_Pedro",
        tags: "falsos profetas, crescimento espiritual Novo Testamento"
    },
    {
        titulo: "1 João",
        descricao: "João enfatiza o amor de Deus e a importância de andar na luz.",
        link: "https://pt.wikipedia.org/wiki/1_João",
        tags: "amor de Deus, andar na luz Novo Testamento"
    },
    {
        titulo: "2 João",
        descricao: "Uma breve carta que exorta os cristãos a guardar a doutrina apostólica e a amar uns aos outros.",
        link: "https://pt.wikipedia.org/wiki/2_João",
        tags: "doutrina apostólica, amor Novo Testamento"
    },
    {
        titulo: "3 João",
        descricao: "Uma carta pessoal de João a Gaio, elogiando sua hospitalidade e fé.",
        link: "https://pt.wikipedia.org/wiki/3_João",
        tags: "hospitalidade, fé Novo Testamento"
    },
    {
        titulo: "Judas",
        descricao: "Uma breve carta que adverte contra falsos mestres e exorta os cristãos a perseverar na fé.",
        link: "https://pt.wikipedia.org/wiki/Judas",
        tags: "falsos mestres, perseverança Novo Testamento"
    },
    {
        titulo: "Apocalipse",
        descricao: "Um livro profético cheio de simbolismo, que revela visões sobre o futuro da humanidade e o retorno de Cristo.",
        link: "https://pt.wikipedia.org/wiki/Apocalipse",
        tags: "profecia, fim dos tempos, retorno de Cristo Novo Testamento"
    }
];

