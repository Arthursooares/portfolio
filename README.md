# Arthur Silva Soares — Portfólio

Portfólio acadêmico e profissional em português, desenvolvido com HTML, CSS e JavaScript, sem etapa de compilação.

Link de acesso: https://Arthursooares.github.io/portfolio/

## Executar localmente

Na pasta do projeto, execute:

```sh
python3 -m http.server 8766 --directory dist
```

Abra http://localhost:8766 no navegador.

## Editar no VS Code

Os arquivos em `dist/` são o código-fonte do site e podem ser editados diretamente:

- `index.html`: página principal.
- Demais arquivos HTML: oito páginas de projetos.
- `style.css`: identidade visual e regras responsivas.
- `motion.js`: menu móvel, indicação da seção atual e animações.
- `assets/arthur.jpeg`: foto do autor.

A navegação móvel pode ser fechada com Escape, ao selecionar um link ou ao clicar fora do menu. As animações respeitam a preferência por movimento reduzido.

## Publicar

O workflow `.github/workflows/pages.yml` publica o conteúdo de `dist/` no GitHub Pages a cada envio para `main`. Nas configurações do repositório, Pages deve usar GitHub Actions como origem.

## Conteúdo e créditos

Projetos acadêmicos: PROVERDE, BookRoom, SRP, Toy Story, TAFE e Ruído Ocupacional. Projetos pessoais: Dashboard Financeiro e Guardiã. Cada página aponta para o código da respectiva equipe ou autor; TAFE utiliza Expo Snack.

Screenshots de projetos acadêmicos são referenciadas do portfólio de Lucas Garcia Lima, com crédito nas páginas. Esses recursos e as fontes do Google Fonts dependem de acesso à internet. A captura de Ruído Ocupacional está em `dist/assets/ruido-ocupacional.png` e pertence ao próprio projeto.

Pendências de conteúdo: screenshots de SRP, Dashboard Financeiro e Guardiã; cargas horárias e algumas datas de certificações; validação das tecnologias utilizadas pessoalmente nos projetos acadêmicos.
