## Aula [009]


### Oque foi visto
> Demos continuidade aos estudos de GIT
> No geral é cabivel a revisão da aula anterior, junto com incrementação de conteúdo para o terminal de comando do respectivo sistema.
> [Repositorio visto em sala](https://github.com/italoartista/git-feelings)
> [Curso de ciencia da computação harvard](https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science?linked_from=autocomplete-prequery&c=autocomplete-prequery&position=1)


- Oque foi visto:
  - [Git livro aprendizagem](https://git-scm.com/book/en/v2) 
  - (*Oque é um repositorio?*) Inicializa-se o repositorio utilizando (*git init*) podemos ver também arquivos dentro de nosso repositorio da pasta .git utilizado: (*ls -la*).
  -  *echo+"Algum texto"+">"exemplo.txt* --> Assim podemos criar também um arquivo utilizando echo.
  -  Utilizando *git add .* nós adicionamos arquivos ou modificações feitas no código para a area de staged. Que estão "esperando" para serem versionados em algum tipo de repositorio.
  -  Utilizando após isso um (*git commit -m "Comentário"*) nós subiremos este arquivo para um repositorio a qual já está alocado em nosso código.
  -  Utilizando também o (*git log*) veremos o registro da "linha do tempo" de nosso código. 
  -  (*git remote get-url origin*).Comando para checarmos se possuimos conexão remota. Uma versão pode-ser utilizar o proprio (*git remote*). Que dessa forma se não obtiver um retorno a seu comando ele não há conexão.
  -  (*git remote add origin + link do seu repositorio*.) Comando para adicionarmos nosso código a um repositorio local
  -  (*git pull (origin main)*). Puxamos de nossa conexão remota para nosso código local.
  -  Alguns comandos de CMD que serão importantes seriam comandos para: Renomear, deletar, trocar de pastas e etc no **CMD**.
  -  [CMD macOS](https://osxdaily.com/2007/02/24/five-ways-to-get-help-in-the-mac-os-x-command-line/)
  -  Podemos procurar um **sheet cheat (nome do cmd)**
  -  Coursera --> Bom site para *mooc*(Cursos massivos online) estudo intensivo

#### Comandos macOS (Mas serve pra maior parte dos cmd's imagino eu)
> Touch (Criar algo)<br><br>
> RM (Remover algo)| RM * . * (Remover todos os arquivos)| rm -R (Remover todos os arquivos, pode vir acompanhado de um caminho como *rm -R js/*).<br><br>
> PWD (Me localizar nas pastas)<br><br>
> MV *arquivo para mover* *para onde mover*<br><br>
> LS *arquivo* (Listar oque há nesta pasta)<br><br>
> drwxr-xr-x (Permissões para navegar no diretorio específico)(dir,read,write,execution...)(Padrão 777, Ler, escrever e executar). Para mais duvidas acessar --> [CHMOD Linux](https://guialinux.uniriotec.br/chmod/). [Permissões formato 777](https://www.sh2.com.br/sac/knowledgebase/52/Permissoes-777-veja-os-riscos-envolvidos.html#:~:text=Permissão%20777%20significa%20acesso%20total,afetar%20todo%20o%20servidor%20compartilhado.)<br><br>
> CP *Arquivo a ser copiado* *Onde será copiado* (Copias)<br><br>
> "Help" macOS --> Man + comando    
> git checkout -b "Nome" (Criamos a branch e já trocamos para ela)
> git diff main/dev ( Faz comparação entre as branches )
> git merge + branch a se "mesclar"