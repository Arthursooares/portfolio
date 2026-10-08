# Arthur Silva Soares — Portfólio

Portfólio acadêmico e profissional em português, desenvolvido com HTML, CSS e JavaScript, sem etapa de compilação.

## Executar localmente

Na pasta do projeto, execute:

```sh
python3 -m http.server 8766 --directory dist
```

Abra http://localhost:8766 no navegador.

## Editar no VS Code

Os arquivos em `dist/` são o código-fonte do site e podem ser editados diretamente:

- `index.html`: página principal.
- Demais arquivos HTML: sete páginas de projetos.
- `style.css`: identidade visual e regras responsivas.
- `motion.js`: menu móvel, indicação da seção atual e animações.
- `assets/arthur.jpeg`: foto do autor.

A navegação móvel pode ser fechada com Escape, ao selecionar um link ou ao clicar fora do menu. As animações respeitam a preferência por movimento reduzido.

## Publicar

Publique o conteúdo de `dist/` em uma hospedagem estática. Para GitHub Pages, selecione GitHub Actions e utilize um fluxo que envie `dist/` com `actions/upload-pages-artifact` e publique com `actions/deploy-pages`.

## Conteúdo e créditos

Projetos acadêmicos: PROVERDE, BookRoom, SRP, Toy Story e TAFE. Projetos pessoais: Dashboard Financeiro e Guardiã. Cada página aponta para o código da respectiva equipe ou autor; TAFE utiliza Expo Snack.

Screenshots de projetos acadêmicos são referenciadas do portfólio de Lucas Garcia Lima, com crédito nas páginas. Esses recursos e as fontes do Google Fonts dependem de acesso à internet.

Pendências de conteúdo: screenshots de SRP, Dashboard Financeiro e Guardiã; cargas horárias e algumas datas de certificações; validação dos semestres e das tecnologias utilizadas pessoalmente nos projetos acadêmicos.
