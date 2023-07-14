# API CRUD com Node.js e Express

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=nodedotjs)
![Express.js](https://img.shields.io/badge/Express.js-4.18-lightgrey?logo=express)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Uma API RESTful fundamental construída com Node.js e o framework Express.js. Esta API implementa todas as operações CRUD (Create, Read, Update, Delete) para gerenciar uma coleção de "itens". Os dados são persistidos em um arquivo `db.json` para simplificar, sem a necessidade de um banco de dados externo.

## ✨ Features

-   **Servidor Express:** Configuração de um servidor web robusto.
-   **Rotas Modulares:** As rotas da API são organizadas em um módulo separado para manter o código limpo.
-   **Operações CRUD Completas:** Implementação dos cinco endpoints essenciais de uma API RESTful.
-   **Persistência em JSON:** Os dados são salvos em um arquivo local, tornando a API autônoma.
-   **Desenvolvimento Otimizado:** Inclui `nodemon` para reiniciar o servidor automaticamente durante o desenvolvimento.

## 📦 Instalação e Configuração

1.  **Clone o repositório e instale as dependências:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd api-crud-nodejs-express
    npm install
    ```

2.  Nenhuma configuração adicional é necessária.

## ▶️ Como Executar

-   Para **desenvolvimento** (com reinicialização automática):
    ```bash
    npm run dev
    ```

-   Para **produção**:
    ```bash
    npm start
    ```
O servidor estará rodando em `http://localhost:3000`.

## ⚙️ Endpoints da API

Para testar os endpoints, use uma ferramenta como **Insomnia**, **Postman** ou a extensão **REST Client** para VS Code.

| Método | URL                  | Corpo da Requisição (JSON)                            | Descrição                         |
| :----- | :------------------- | :---------------------------------------------------- | :---------------------------------- |
| `GET`    | `/items`             | N/A                                                   | Retorna a lista de todos os itens.  |
| `GET`    | `/items/:id`         | N/A                                                   | Retorna um único item pelo seu ID.  |
| `POST`   | `/items`             | `{ "name": "Novo Item", "description": "Desc." }`     | Cria um novo item.                  |
| `PUT`    | `/items/:id`         | `{ "name": "Item Editado", "description": "Nova." }` | Atualiza um item existente.         |
| `DELETE` | `/items/:id`         | N/A                                                   | Deleta um item pelo seu ID.         |

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.