# Design Patterns

This repository contains examples of design pattern implementations in Java using Spring Boot and Maven.

## Projects

- **Proxy Pattern**
    Example of applying the Proxy pattern for response caching in report generation.
    **Location:** `proxy-pattern/`

## Technologies

- Java 21
- Spring Boot 3.4.4
- Maven (with Maven Wrapper)
- H2 Database (runtime for tests)

## Repository Structure

- `proxy-pattern/`
    - `src/main/java`: Java source code
    - `src/main/resources`: Configuration files
    - `src/test/java`: Unit tests
- Other files and directories related to Maven configuration and build tools

## How to Run the Project

1. Navigate to the desired project directory, for example:
     ```bash
     cd proxy-pattern
     ```
2. Run the application using Maven Wrapper:
     ```bash
     ./mvnw spring-boot:run
     ```

## Contribution

Contributions are welcome! Please open issues or pull requests for suggestions and improvements.

## License

This project is licensed under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).
