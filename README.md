# Design Patterns

This repository contains examples of design pattern implementations.

## Projects

- **Proxy Pattern**
    Example of applying the Proxy pattern for response caching in report generation.
    **Location:** `proxy-pattern/`

- **Singleton**
    Example of a logger using Singleton and risks involved when used in multithreaded environments and can complicate unit testing.
    **Location:** `singleton-pattern/`

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
