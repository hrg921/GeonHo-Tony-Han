---
type: til
title: Single Responsibility Principle
created: 2019-05-21
tags:
  - Software Engineering
  - SOLID
---

# Single Responsibility Principle

The single responsibility principle is a computer programming principle that states that every module, class, or function[1] should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class. All its services should be narrowly aligned with that responsibility. Robert C. Martin expresses the principle as, "A class should have only one reason to change,"[1] although, because of confusion around the word "reason" he more recently stated "This principle is about people."[2]

## Example
module that compiles and prints a report. Imagine such a module can be changed for two reasons. First, the content of the report could change. Second, the format of the report could change. These two things change for very different causes; one substantive, and one cosmetic. The single responsibility principle says that these two aspects of the problem are really two separate responsibilities, and should therefore be in separate classes or modules. It would be a bad design to couple two things that change for different reasons at different times.

The reason it is important to keep a class focused on a single concern is that it makes the class more robust. Continuing with the foregoing example, if there is a change to the report compilation process, there is greater danger that the printing code will break if it is part of the same class.

## In My Word
최대한 파일을 나눈다. 하나의 파일은 한 가지 일만 한다. (Example Props로 받은 데이터를 렌더한다. 동작을 컨트롤 한다. Product에 관한 비즈니스 로직을 다룬다.)
