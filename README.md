# 🚀 Projeto de Automação de Testes com Maestro

Este projeto contém uma suíte de testes de automação desenvolvida com Maestro para validar uma jornada de usuário crítica em um aplicativo de e-commerce. A suíte é focada em garantir a estabilidade do fluxo de **login**, **login Invalido**, **logout**, **Cadastro**, **seleção de produto**, **adição ao carrinho**, **carrinho vazio** e **Favoritos**.



## 🗺️ Jornada de Teste Automatizada

A automação cobre a seguinte jornada principal do usuário, simulando um fluxo de compra real:

1. **Login:** O usuário insere credenciais para acessar sua conta.
2. **Login Invalido:** O usuário insere credenciais invalidas.
3. **Logout:** Após o login, o usuario relaiza logout.
4. **Cadastro:** Usuario realiza cadastro (Cenario não completo para não gerar dados em PRD).
5. **Seleção de produto:** Após logado, o usuario seleciona um novo produto.
6. **Adição ao Carrinho:** O produto selecionado é adicionado ao carrinho de compras.
7. **Carrinho vazio:** Validação de carrinho vazio.
8. **Adição de produto aos favoritos:** Valida adição de produto aos favoritos.

## ✅ Casos de Teste

A automação inclui os seguintes casos de teste planejados:

| ID    | Cenário                      | Descrição                                                                 |
|-------|------------------------------|--------------------------------------------------------------------------|
| CT-01 | Login bem-sucedido          | Valida a jornada completa de login. |
| CT-02 | Login com credenciais inválidas | Garante que o aplicativo exibe uma mensagem de erro e impede o acesso com dados de login incorretos. |
| CT-03 | Logout | Garante o logout correto da sessão. |
| CT-04 | Busca de produto | Busca produto por SKU/EAN. |
| CT-05 | Adição ao carrinho | Adiciona o produto na sacola e incrementa quantidade. |
| CT-06 | Carrinho vazio | Valida o carrinho sem itens adicionados. |
| CT-07 | Favoritos | Adiciona produtos aos favoritos. |


**Link da execução dos testes:** [Visualizar no Google Drive](https://drive.google.com/file/d/1pnN7EcwFMV-Ipnr-2N7mNh_bgr4dgHio/view?usp=sharing)


## ⚙️ Pré-requisitos e Instalação

Antes de executar os testes, certifique-se de que o Maestro esteja instalado em sua máquina.

Você pode instalar seguindo a [documentação oficial](https://maestro.mobile.dev/).

## 📁 Estrutura do Projeto

O projeto segue a seguinte organização, baseada nas boas práticas de organização do Maestro:

```text
DESAFIO-TECNICO-MAESTRO/
├── .e2e/
│   └── ./auth
│       └── login.yml
│       └── loginFalse.yml
│       └── logout.yml
│       └── signup.yml
│   └── ./cart
│       └── add_cart_items.yml
│       └── addFavoriteProduct.yml
│       └── emptyCart.yml
│   └── ./pages
│       └── auth.js
│       └── cart.js
    └── ./utils
│       └── datas.js  
├── run-flow.yml
└── README.md
```

- **e2e/**: Contém todos os arquivos `.yaml` com a lógica de teste para cada fluxo.
- **pages/**: Armazena dados de teste (como credenciais de login) para fácil manutenção e reuso.
- **utils/**: Gerador de massa de dados.

## ⚡ Como Executar os Testes

Para rodar todos os testes localmente, abra o terminal na pasta raiz do projeto e execute:

```bash
maestro test run-flow.yml
```

Para executar um fluxo de teste específico, utilize o caminho do arquivo:

```bash
maestro test flows/login_flow.yaml
```