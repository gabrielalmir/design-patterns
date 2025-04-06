package com.example;

public class Main {
    public static void main(String[] args) {
        var logger = Logger.getInstance();
        var logger2 = Logger.getInstance();

        logger.log("Teste de Log");
        logger2.log("Teste 2");

        System.out.println(logger.hashCode());
        System.out.println(logger2.hashCode());
    }
}
