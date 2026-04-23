# LifeFlix Mobile

Aplicativo mobile desenvolvido com Expo e React Native que simula uma experiência de streaming focada em canais ao vivo, com navegação por abas, tela de reprodução e lista de favoritos salva localmente no dispositivo.

O projeto tem caráter de estudo e prática de desenvolvimento mobile, organização de componentes, consumo de API e navegação com Expo Router.

## Visão geral

Hoje o app já possui:

- navegação com `expo-router`
- interface mobile com tema escuro
- listagem de canais consumidos de uma API externa
- reprodução do canal em tela dedicada com `WebView`
- favoritos persistidos com `AsyncStorage`
- menu lateral animado com `moti`

Atualmente as abas de `Filmes` e `Séries` já existem na navegação, mas ainda estão em fase inicial de implementação.

## Tecnologias utilizadas

- `Expo`
- `React Native`
- `TypeScript`
- `Expo Router`
- `Axios`
- `AsyncStorage`
- `react-native-webview`
- `moti`
- `expo-linear-gradient`
- `expo-keep-awake`

## Fluxo atual do app

### `Home`

- exibe atalhos para favoritos e canais
- abre o menu lateral
- organiza o conteúdo em seções

### `Canais`

- busca os dados da API
- ordena os canais em ordem alfabética
- abre a tela de reprodução ao tocar em um card

### `Canal`

- carrega a URL do canal recebida por rota
- reproduz o conteúdo em `WebView`
- mantém a tela ativa durante a reprodução
- permite adicionar ou remover dos favoritos
- mostra feedback visual com toast

### `Favoritos`

- lê os dados salvos no `AsyncStorage`
- renderiza os canais favoritados
- permite reabrir rapidamente um canal salvo

## Configuração do ambiente

O projeto usa variáveis públicas do Expo para acessar a API.

Crie ou ajuste o arquivo `.env` com:

```env
EXPO_PUBLIC_API_URL="https://seu-endpoint-api"
EXPO_PUBLIC_API_KEY="sua-chave-api"
```

Essas variáveis são utilizadas em [constants/api.ts](/c:/Projetos/AplicaçõesMobile/LifeFlix-Mobile/constants/api.ts:1).

## Como rodar o projeto

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o ambiente Expo

```bash
npm run start
```

### 3. Execute no dispositivo desejado

```bash
npm run android
```

```bash
npm run ios
```

```bash
npm run web
```

## Scripts disponíveis

- `npm run start`: inicia o servidor do Expo
- `npm run android`: abre o app no Android
- `npm run ios`: abre o app no iOS
- `npm run web`: abre a versão web
- `npm run lint`: executa o lint
- `npm run reset-project`: roda o script local de reset do projeto

## Padrões usados no projeto

- rotas baseadas em arquivos com `expo-router`
- separação entre telas, componentes, hooks, constantes e serviços
- consumo de API centralizado em `constants/api.ts`
- persistência local encapsulada em `src/services/favoritos.ts`

## Status do projeto

Funcionalidades implementadas:

- listagem de canais
- tela de reprodução
- favoritos com persistência local
- menu lateral animado
- navegação principal por abas

Em evolução:

- conteúdo de filmes
- conteúdo de séries
- telas de perfil e configurações já previstas na navegação raiz

## Observações

- o app depende de uma API externa configurada por variáveis de ambiente
- a experiência foi pensada principalmente para uso mobile
- por se tratar de um projeto de estudo, a estrutura ainda está em evolução
