# Design Patterns

Este repositório contém exemplos de implementação de padrões de projeto em Java utilizando Spring Boot e Maven.

## Projetos

- **Proxy Pattern**
  Exemplo da aplicação do padrão Proxy para cache de respostas na geração de relatórios.
  **Localização:** `proxy-pattern/`

## Tecnologias

- Java 21
- Spring Boot 3.4.4
- Maven (com Maven Wrapper)
- H2 Database (runtime para testes)

## Estrutura do Repositório

- `proxy-pattern/`
  - `src/main/java`: Código fonte Java
  - `src/main/resources`: Arquivos de configuração
  - `src/test/java`: Testes unitários
- Outros arquivos e diretórios correspondentes à configuração do Maven e ferramentas de build

## Como Executar o Projeto

1. Navegue até o diretório do projeto desejado, por exemplo:
   ```
   cd proxy-pattern
   ```
2. Execute a aplicação via Maven Wrapper:
   ```
   ./mvnw spring-boot:run
   ```

## Contribuição

Contribuições são bem-vindas! Por favor, abra issues ou pull requests para sugestões e melhorias.

## Licença

Este projeto está licenciado sob a [Licença Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).
