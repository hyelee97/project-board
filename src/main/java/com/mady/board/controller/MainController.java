package com.mady.board.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class MainController {

  @GetMapping("/api/main/hello.do")
  public String hello() {
    log.info("### hello2~{}", "Spring Boot board project back end~!");
    return "Hello~ React + Spring Boot CONNECT SUCCESS!";
  }
}
