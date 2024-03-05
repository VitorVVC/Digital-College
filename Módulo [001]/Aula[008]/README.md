## Aula [008]

- Oque foi visto?
  - Nesta aula do dia 26/01/2024 eu não pude estar presente. Porém ainda na mesma época pedi aos meus colegas que comparaceram na aula para me auxiliarem com o conteúdo perdido, e o abordarei agora.
  - Em "resumo" vimos comandos básicos de git / github.

- `git`
  - O Git é um sistema de controle de versão distribuído, utilizado para rastrear mudanças no código-fonte durante o desenvolvimento de software.
  - Na minha posição perante mercado hoje , utilizo git como ferramenta de estudos e práticas com projetos. Espero em breve conseguir chama-lo também de ferramente de trabalho.
  - `Comandos:`
    - Para iniciar usamos `git init`, assim nosso terminal inicia e espera a conexão com nosso repositório, que utilizamos muito comumente o github.
    - Logo após não existe uma "regra" de como devemos utilizar, mas EU Vitor utilizo `git branch -M main`, assim crio minha branch principal, local onde minha "aplicação final" estará alocada, em projetos maiores e em equipe dividimos em diversas branchs para manter a estrutura da aplicação segura para o usuário utilizar, porém este é um tópico não abordado nessa aula, contudo que outros amigos e eu utilizamos, agradecimento ao Duarte, Adryan e Adriel pelo suporte neste conteúdo em especifico, fora outras duvidas e conversas abordadas em torno deste assunto que me foi de gigantesca ajuda.
    - Em sequencia podemos dar um `git status`, assim visualizamos oque podemos subir como primeiro commit.
    - Logo após `git add .` ou `git add nArquivo` para escolhermos oque queremos subir.
    - Claro, conectaremos nosso repositório também com: `git remote add origin: git@github.com:VitorVVC/nomeDoRepositorio.git`
    - Para nosso primeiro push utilizamos: `git push -u origin main`
    - Porém em subsequencia somente `git push` será necessário.
- `branches`
  - Conteúdo o qual tive introdução recente com meus colegas antes citados, aprendi e entendi os conceitos de branches em códigos mais extensos, como projetos em equipe e até locais de trabalho.
  - Aprendi que sempre que desejamos realizar uma alteração no projeto, isso tem que ser feito através de branches "extras" a main, utilizando `git branch -M Tarefa1`. Por exemplo passei Tarefa1 como nome, seguindo a ideia de trabalharmos encima de tasks. E esta branch será avaliada pelo progamador de maior experencia no projeto / empresa para considerar se deve ser adicionada a versão final da aplicação.
  - Podemos navegar pelas branchs e versões passadas com `git checkout 'nome da branch'` para "voltarmos no tempo" e entender alguma necessidade de versões anteriores a nossa branch main, caso desejar voltar ao presente apenas passar git checkout novamente porem com o nome da branch principal, como "master" ou "main".
  - Com o comando `git log --oneline` podemos também as ultimas alterações e versões do código.
  - Antes de iniciar um novo dia encima do projeto devemos fazer um `git pull`, para puxarmos a versão mais recente de nossa aplicação, que pode ter sido alterada ou corrigida em nossa ausência.