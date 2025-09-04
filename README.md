# 🚀 Projeto de Automação de Testes com Maestro

Este projeto contém uma suíte de testes de automação desenvolvida com Maestro para validar uma jornada de usuário crítica em um aplicativo de e-commerce. A suíte é focada em garantir a estabilidade do fluxo de **login**, **login Invalido**, **logout**, **Cadastro** **seleção de produto** e **adição ao carrinho**.

## 🗺️ Jornada de Teste Automatizada

A automação cobre a seguinte jornada principal do usuário, simulando um fluxo de compra real:

1. **Login:** O usuário insere credenciais para acessar sua conta.
2. **Login Invalido:** O usuário insere credenciais invalidas.
2. **Logout:** Após o login, o usuario relaiza logout.
2. **Cadastro:** Usuario realiza cadastro (Cenario não completo para não gerar dados em PRD).
3. **Seleção de produto:** Após logado, o usuario seleciona um novo produto.
3. **Adição ao Carrinho:** O produto selecionado é adicionado ao carrinho de compras.

## ✅ Casos de Teste

A automação inclui os seguintes casos de teste planejados:

| ID    | Cenário                      | Descrição                                                                 |
|-------|------------------------------|--------------------------------------------------------------------------|
| CT-01 | Compra bem-sucedida          | Valida a jornada completa de login, seleção de produto e adição ao carrinho com credenciais válidas. |
| CT-02 | Login com credenciais inválidas | Garante que o aplicativo exibe uma mensagem de erro e impede o acesso com dados de login incorretos. |
| CT-03 | Logout | Garante que o usuario deslogue corretamente da sessão. |
| CT-04 | Cadastro | Garante o cadastro valido no app. |

## ⚙️ Pré-requisitos e Instalação

Antes de executar os testes, certifique-se de que o Maestro esteja instalado em sua máquina.

Você pode instalar seguindo a [documentação oficial](https://maestro.mobile.dev/).

## 📁 Estrutura do Projeto

O projeto segue a seguinte organização, baseada nas boas práticas de organização do Maestro:

```text
seu-projeto/
├── .maestro/
│   └── maestro-cloud.yaml
├── flows/
│   ├── login_flow.yaml
│   └── add_to_cart.yaml
├── config/
│   └── test_data.yaml
├── screenshots/
└── README.md
```

- **flows/**: Contém todos os arquivos `.yaml` com a lógica de teste para cada fluxo.
- **config/**: Armazena dados de teste (como credenciais de login) para fácil manutenção e reuso.
- **screenshots/**: Destino para capturas de tela geradas durante a execução dos testes.

## ⚡ Como Executar os Testes

Para rodar todos os testes localmente, abra o terminal na pasta raiz do projeto e execute:

```bash
maestro test
```

Para executar um fluxo de teste específico, utilize o caminho do arquivo:

```bash
maestro test flows/login_flow.yaml
```

---

Se quiser, posso aplicar essa formatação diretamente no arquivo README.md. Deseja que eu faça isso?

## ⚙️ Pré-requisitos e Instalação

Antes de executar os testes, certifique-se de que o Maestro esteja instalado em sua máquina.

Você pode instalar seguindo a [documentação oficial](https://maestro.mobile.dev/).

## 📁 Estrutura do Projeto

O projeto segue a seguinte organização, baseada nas boas práticas de organização do Maestro:

```text
seu-projeto/
├── .maestro/
│   └── maestro-cloud.yaml
├── flows/
│   ├── login_flow.yaml
│   └── add_to_cart.yaml
├── config/
│   └── test_data.yaml
├── screenshots/
└── README.md
```

- **flows/**: Contém todos os arquivos `.yaml` com a lógica de teste para cada fluxo.
- **config/**: Armazena dados de teste (como credenciais de login) para fácil manutenção e reuso.
- **screenshots/**: Destino para capturas de tela geradas durante a execução dos testes.

## ⚡ Como Executar os Testes

Para rodar todos os testes localmente, abra o terminal na pasta raiz do projeto e execute:

```bash
maestro test
```

Para executar um fluxo de teste específico, utilize o caminho do arquivo:

```bash
maestro test flows/login_flow.yaml
```

---

Se quiser, posso aplicar essa formatação diretamente no arquivo README.md. Deseja que eu faça isso?
