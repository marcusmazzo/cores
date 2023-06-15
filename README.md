## Instalar componentes necessários
 
 VSCode:    https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user

 Node:      https://nodejs.org/dist/v16.17.1/win-x64/node.exe

## Efetuar teste para garantir que componentes foram instalados com sucesso
1. Abrir aplicação Visual Studio Code
2. Clicar no menu Terminal e clicar em "New Terminal" 
    ![VSCode Terminal](image.png)
    
    Ou pressionar, ao mesmo tempo, nas teclas CTRL + SHIFT + ç
3. No terminal, digitar "npm version" e verificar se aparece o seguinte resultado:
    ![Versão NPM ](image-1.png)
4. Caso não apareça a imagem acima deverá ser verificado o processo de instalação do Node

## Efetudando download das dependências necessárias
Para que a aplicação possa executar é necessário executar os passos abaixo:

1. Com o Visual Studio Code aberto e o terminal aberto, digitar "npm install"
2. Aguardar que o download seja concluido.

    ![npm install com sucesso](image-3.png)
3. Validar que, do lado esquerdo da tela, no icone "Explorer (Ctrl+Shift+E)" aparece o folder "node_modules".

    ![Node Modules](image-4.png)

## Executando a aplicação
Escreva, no terminal (pressionar, ao mesmo tempo, teclas CTRL + SHIFT + ç),  `ng serve` e pressionar tecla ENTER.


## Visualizando a aplicação
Abrir navegador (Chrome, Edge, etc) e escrever na barra de endereço (URL) http://localhost:4200/ e pressionar tecla ENTER

Estando tudo correto a tela abaixo deverá ser exibida:

![Aplicação](image-2.png)


## API
Para que o front-end funcione é preciso atender aos seguintes requisitos:

1. Possuir um método GET que retorne um conjunto de "COR".
2. Possuir um método GET que recebe, como parâmetro da URL (path variable), o ID de uma "COR".
3. Possuir um método POST que recebe, como entrada no corpo do pedido (request body), uma "COR".
4. Possuir um método PUT que recebe, como entrada no corpo do pedido (request body), uma "COR" e recebe, como parâmetro da URL (path variable), o ID de uma "COR".
5. Possuir um método DELETE que recebe, como parâmetro da URL (path variable), o ID de uma "COR".

Outros pontos a considerar:
1. Os métodos "GET" são métodos de consulta.
2. O método "POST" é um método para persistência (salvar).
3. O método "PUT" é uma método para atualização.
4. O método "DELETE" é um método para exclusão.

A entrada "COR" deve possuir o seguinte formato:

MediaType: JSON
``` 
{
    "id":number,
    "descricao":text
}

```

Observação:

Para que a "COR" funcione corretamente, a descrição utilizada deverá ser em Inglês, exemplo:

``` 
{
    "id":1,
    "descricao":"white"
}

```