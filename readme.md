# Curso React JS Rocketseat

Anotações do [curso de React da Rocketseat](https://rocketseat.com.br/)



### Aula 2 - Criando Projeto

Tecnologias utilizadas:
* Node JS
* NPM
* Yarn

O primeiro passo é instalar globalmente o create-react-app com o comando:
**npm Install -g create-react-app**

Depois devemos criar o projeto com o comando:
**create-react-app nome_do_projeto**


Principais pastas:

Node modules - dependências e pacotes
Public - Arquivos que serão vistos pelo usuário final da aplicação
SRC - Código fonte da aplicação

**npm start** -  Roda a nossa aplicação no localhost


### Aula 3 - O que são componentes

A aplicação inicia do arquivo *index.js*. Nele nós importamos o *react*, o *react-dom* e tem a função *render*. A função *render* pega o conteúdo da aplicação e manda renderizar dentro da div com id *root* que está no *index.html*. A função render só será utilizada uma vez nesse arquivo.

O arquivo *App.js* é uma classe que extende o *component* do React JS. Para criar um componente devemos criar uma classe e extender a classe *component*.

Um componente é um conjunto de parte estrutural (html), funcional(js) e de estilização (css) encapsulados em um trecho de código. Todo componente tem um método obrigatório: o método *render* que vai retornar um conteudo *jsx*.

Dentro do html do jsx não usamos a palavra resevada 'class' para as classes do html, mas usamos *className*, assim, não há confusão da classe js com as classes do html.

### Aula 4 - Criando Header

Criamos a pasta *components*, dentro dela a pasta *Header* (que é o nome do nosso componente) e o arquivo *index.js*

**Stateless components** - Componentes criados no react somente com funções. É um componente sem formato de classe, usado quando não temos atualização de estados.

Depois de criado o componente deve ser exportado no arquivo *app.js*

Dentro da pasta do header eu crio um arquivo *styles.css* que vai conter o somente o css do header. Com react eu não faço o link do css dos componentes direto no *index.html*, pois tudo é via javascript. O arquivo styles deve ser importado no index.js do componente.

Para eliminar o css que já vem no html criamos um arquivos *styles.css* dentro da pasta *src*, importo esse css dentro do app e removo as estilizações globais.

#### Aula 5 - Buscando produtos da API

Vamos buscar os proditos de uma api ulilizando *Axios*

**yarn add axios** - Instala a biblioteca axios no projeto

Dentro da pasta *src* criamos a pasta *Services* onde vai ficar todo o código responsável por conexões com serviços externos. Dentro dessa pasta crio o arquivo *api.js* e nele importo o Axios.

URL Base: `http://rocketseat-node.herokuapp.com/api`

No arquivo *app.js* importo o arquivo *api.js* do *Services* 

A lógica para buscar os dados da api ficará dentro de uma nova pasta chamada *pages*, ela ficara dentro do *src*. Nela vamos criar uma pasta para cada página da nossa aplicação, a primeira será a pasta *main* e, dentro dela, o arquivo *index.js*


**Métodos de ciclo de vida do react** - Métodos que executam automáticamente dependendo do ciclo de montagem do componente na tela

* componentDidMount - Executa uma ação assim que é renderizada na tela

As funções nativas do react devem ser usadas como funções normais (named functions), já as funções que nós criamos devem ser feitas como *arrow functions* para, entre outras coisas, nos permitir o uso do *this* para referênciar os escopo da classe


### Aula 6 - Armazenando no estado

O estado no react é sempre um objeto. Dentro das variáveis de estado podemos armazenar o que a gente quiser.

* setState - Atualiza as variáveis de estado de acordo com o que foi passado como parâmetro. O setState atualiza a variável e o método render escuta essas alterações e, a cada alteração, ele executa novamente trazendo essas alteralções para a tela

### Aula 7 - Listando produtos

Aplicação de desestruturação no objeto retornado pela api para deixar o código um pouco menor e aplicação de estilos.

### Aula 8 - Página anterior/próxima

Para chamar uma função no React precisamos colocar o evento que vai ser observado, no nosso caso o onClick (em camel case mesmo), abrir chaves para inserir o nome da função que será chamada naquele evento.

### Aula 9 - Configurando a navegação

È preciso fazer a configuração e depois a criação da página de exibição

**Yarn add react-router-dom** - Instala a biblioteca necessária para fazer a navegação

Crio na pasta *src* o arquivo *routes.js*

O *BrowserRouter* vai definir que estamos usando as rotas através de um browser. O *switch* vai permitir que somente uma rota seja chamada ao mesmo tempo.

### Aula 10 - Navegando pro detalhe

Buscamos os dados de cada produto fazendo uma chamada a api usando o id passado como parâmetro.
