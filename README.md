# Como rodar o chat multiroom em sua máquina:

## Instalar:

  * Node.Js
  * Módulos do Node.Js:
    * express
    * consign
    * ejs
    * express-validator
    * socket.io

## Como instalar:

### Instalação do Node:

Windows:

* Node.Js:

  1. Baixe o Node no seguinte link, de preferência a versão recomedada 16.14.0: <https://nodejs.org/en/>
  2. Execute o instalador baixado, deixe marcadas as oções de instalação padrão e instale normalmente

Linux:

* Node.Js:
  1. Instale o gerenciador de versões do node nvm executando o código mais apropriado para a sua versão do linux no terminal:
 
     ```
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
     ```

     ```
     wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
     ```
  2. Execute o seguinte código para instalar a versão 16.14.0 do node:
    
      ```
      nvm install 16.14.0
      ```
      
 ## Módulos do Node.Js
 
 1. Após baixar o projeto na sua máquina e instalar o node.js e o mysql, navegue até a pasta onde está instalado o projeto através do terminal utilizando o comando 'cd'
 2. Instale os módulos utilizando os códigos no terminal:
    * Express:
      
      ```
      npm install express --save
      ```
    * Consign:
      
      ```
      npm install consign --save
      ```
    * Ejs:
      
      ```
      npm install ejs --save
      ```
    * Driver Mysql:
      
      ```
      npm install mysql --save
      ```
    * Express-Validator:
      
      ```
      npm install express-validator@5.3.1 --save
      ```
    * Socket.io:
      
      ```
      npm install socket.io --save
      ```
      
## Rodando o projeto
    
    1. Abra o terminal e navegue até a pasta onde está armazenado o projeto utilizando o comando cd
    2. Digite o seguinte comando:
        
       ```
       node app.js
       ```
    3. Abra o navegador e digite na url localhost

* Dica - Para melhor utilizar o site, abra outra janela (de preferência anônima) e entre na url localhost novamente, observe dois usuários interagindo no chat simultâneamente
