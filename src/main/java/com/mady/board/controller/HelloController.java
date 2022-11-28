package com.mady.board.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/board/hello/*")
public class HelloController {

    @RequestMapping(value ="start.do")
    public void index() {
        log.info("### hello~{}", "Spring Boot board project back end~!");
    }
    
}
