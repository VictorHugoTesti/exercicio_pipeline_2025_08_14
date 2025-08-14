# Exercicio_pipeline_2025_08_14
Exercício Prático de estruturação de pipelines de CI/CD com Github Actions

---

### 🚀 Funcionalidades

-   Inserção de dois números via campos de input
    
-   Botão para **multiplicar** os valores
    
-   Botão para **dividir** os valores
    
-   Validação para evitar divisão por zero
    
-   Exibição do resultado diretamente na tela
    

### 🛠️ Etapas do Projeto

#### 1. **Criação da Interface**

-   Estrutura HTML com campos de entrada e botões
    
-   Estilização básica com CSS
    
-   Lógica de cálculo implementada em `index.js`
    

#### 2. **Modularização**

-   Separação das funções de cálculo (`multiplicacao` e `divisao`) em um módulo JS
    
-   Uso de funções reutilizáveis para facilitar testes e manutenção
    

#### 3. **Testes com Jest**

-   Criação de testes unitários para as funções matemáticas
    
-   Validação de casos como divisão por zero
    
-   Arquivo de testes: `index.test.js`

#### 4. **Deploy com Vercel**

-   Projeto hospedado gratuitamente via Vercel
    
-   Configuração automática de build e deploy contínuo
    
-   Link de produção gerado após push na branch principal
    

#### 5. **Integração Contínua com GitHub Actions**

-   Criação do arquivo `.github/workflows/main.yml`
    
-   Pipeline configurado para rodar testes com Jest a cada push ou pull request
    
-   Garantia de qualidade antes do deploy
