package com.example;

import java.io.FileWriter;
import java.io.IOException;
import java.net.URL;
import java.time.LocalDateTime;

public class Logger {
    private static Logger instance;
    private String logFilePath;

    private Logger(String logFilePath) {
        this.logFilePath = logFilePath;
    }

    public static Logger getInstance() {
        String logFileName = "app.log";

        if (instance == null) {
            String resolvedPath = resolveLogFilePath(logFileName);
            instance = new Logger(resolvedPath);
        }

        return instance;
    }

    private static String resolveLogFilePath(String fileName) {
        URL resource = Logger.class.getClassLoader().getResource(fileName);
        if (resource == null) {
            createEmptyFile(fileName);
            return fileName;
        }
        return resource.getPath();
    }

    private static void createEmptyFile(String fileName) {
        try (var writer = new FileWriter(fileName)) {
            // Create an empty file
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void log(String message) {
        try (var writer = new FileWriter(logFilePath, true)) {
            writer.write("[" + LocalDateTime.now() + "] " + message + System.lineSeparator());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
