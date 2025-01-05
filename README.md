# Routine Journal API

Uma API simples para gerenciar registros de diários de rotina e funcionalidades relacionadas.

## Funcionalidades

- Adicionar um novo diário de rotina
- Listar todos os diários de rotina
- Obter um diário de rotina específico
- Atualizar um diário de rotina
- Deletar um diário de rotina
- Enviar notificações de diários de rotina próximos
- Listar diários de rotina próximos

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/JoaoVitor-Mendes/api-routine-journal.git
    ```
2. Vá para o diretório do projeto:
    ```sh
    cd api-routine-journal
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Uso

1. Inicie o servidor:
    ```sh
    npm start
    ```
2. A API estará acessível em `http://localhost:3000`.

## Endpoints

### Adicionar um novo diário de rotina

- **URL**: `/api/routinesJournals`
- **Método**: `POST`
- **Corpo**: 
    ```json
    {
      "name": "João Silva",
      "date": "1990-01-01"
    }
    ```

### Listar todos os diários de rotina

- **URL**: `/api/routinesJournals`
- **Método**: `GET`

### Obter um diário de rotina específico

- **URL**: `/api/routinesJournals/:id`
- **Método**: `GET`

### Atualizar um diário de rotina

- **URL**: `/api/routinesJournals/:id`
- **Método**: `PUT`
- **Corpo**: 
    ```json
    {
      "name": "João Silva",
      "date": "1990-01-01"
    }
    ```

### Deletar um diário de rotina

- **URL**: `/api/routinesJournals/:id`
- **Método**: `DELETE`

### Enviar notificações de diários de rotina próximos

- **URL**: `/api/routinesJournals/notify`
- **Método**: `POST`

### Listar diários de rotina próximos

- **URL**: `/api/routinesJournals/upcoming`
- **Método**: `GET`

## Contribuição

1. Faça um fork do repositório.
2. Crie uma nova branch: `git checkout -b minha-nova-funcionalidade`
3. Faça suas alterações.
4. Commit suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
5. Faça um push para a branch: `git push origin minha-nova-funcionalidade`
6. Envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
