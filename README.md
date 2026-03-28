

# 💻 Meu Portfólio Pessoal

Este é o repositório do meu portfólio pessoal, onde apresento os meus projetos, competências e trajetória como Desenvolvedor Full Stack. A aplicação foi construída com foco em performance, acessibilidade e um design responsivo.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

  * **Framework:** [Next.js](https://nextjs.org/)
  * **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
  * **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
  * **Componentes:** [Radix UI](https://www.radix-ui.com/) / [Shadcn/ui](https://ui.shadcn.com/)
  * **Ícones:** [Lucide React](https://lucide.dev/)
  * **Animações:** [Framer Motion](https://www.framer.com/motion/)

## ✨ Funcionalidades

  * **Internacionalização (i18n):** Suporte multi-idioma (PT/EN/ES) gerido via Context API.
  * **Design Responsivo:** Otimizado para dispositivos móveis, tablets e desktop.
  * **Formulário de Contacto:** Integração para envio de mensagens via WhatsApp/E-mail.
  * **Gestão de Projetos:** Listagem dinâmica dos principais trabalhos realizados.

## 📦 Como Executar o Projeto

1.  **Clonar o repositório:**

    ```bash
    git clone https://github.com/teu-usuario/teu-repositorio.git
    ```

2.  **Instalar as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Executar o servidor de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4.  **Aceder no navegador:**
    Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) para ver o resultado.
Com base na imagem do seu VS Code, notei que você está usando uma estrutura bem organizada com a pasta `src`. Aqui está uma versão mais detalhada e profissional da seção **Estrutura de Pastas**, refletindo exatamente o que aparece no seu editor:

---

## 📂 Estrutura de Pastas

O projeto segue uma arquitetura modular para facilitar a manutenção e escalabilidade:

```text
src/
├── Pages/              # Configurações globais e roteamento (Next.js App Router)
├── Public/             # Recursos estáticos como imagens, ícones e SVGs
├── components/         # Componentes React reutilizáveis e modulares
│   ├── Contact/        # Seção de formulário e links de rede social
│   ├── Education/      # Exibição de trajetória acadêmica
│   ├── Footer/         # Rodapé da aplicação
│   ├── Header/         # Menu de navegação e controles de tema
│   ├── Hero/           # Seção principal de boas-vindas
│   ├── Projects/       # Galeria de projetos desenvolvidos
│   ├── Skills/         # Listagem de tecnologias e competências
│   └── ...             # Outros componentes (LanguageSelector, TypingTitle, etc.)
├── contexts/           # Provedores de estado global (ex: LanguageContext para i18n)
├── lib/                # Configurações de bibliotecas externas e utilitários
├── messages/           # Arquivos de tradução (JSON/JS) para suporte multi-idioma
├── styles/             # Estilização global e variáveis do Tailwind CSS

```

---

### 🛠️ Destaques da Implementação

* **Modularização:** Cada seção da página (`Hero`, `Projects`, `Contact`) possui seu próprio diretório, mantendo a lógica e o estilo encapsulados.
* **Context API:** O estado de internacionalização é gerenciado centralmente em `contexts/LanguageContext.tsx`, permitindo a troca de idioma em tempo real em toda a aplicação.


