---
type: til
title: Open-Closed Principle
created: 2019-05-21
tags:
  - Software Engineering
  - SOLID
  - Object Orientied Programming
---

# Open-Closed Principle

In object-oriented programming, the open/closed principle states "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification";[1] that is, such an entity can allow its behaviour to be extended without modifying its source code.

The name open/closed principle has been used in two ways. Both ways use generalizations (for instance, inheritance or delegate functions) to resolve the apparent dilemma, but the goals, techniques, and results are different.

Open-closed principle is one of the five SOLID principles of object-oriented design.

## Meyer's open/closed principle

Bertrand Meyer is generally credited for having originated the term open/closed principle,[2] which appeared in his 1988 book Object Oriented Software Construction.

A module will be said to be open if it is still available for extension. For example, it should be possible to add fields to the data structures it contains, or new elements to the set of functions it performs.
A module will be said to be closed if [it] is available for use by other modules. This assumes that the module has been given a well-defined, stable description (the interface in the sense of information hiding).[3]
At the time Meyer was writing, adding fields or functions to a library inevitably required changes to any programs depending on that library. Meyer's proposed solution to this dilemma relied on the notion of object-oriented inheritance (specifically implementation inheritance):

A class is closed, since it may be compiled, stored in a library, baselined, and used by client classes. But it is also open, since any new class may use it as parent, adding new features. When a descendant class is defined, there is no need to change the original or to disturb its clients.[4]

## Polymorphic open/closed principle

During the 1990s, the open/closed principle became popularly redefined to refer to the use of abstracted interfaces, where the implementations can be changed and multiple implementations could be created and polymorphically substituted for each other.

In contrast to Meyer's usage, this definition advocates inheritance from abstract base classes. Interface specifications can be reused through inheritance but implementation need not be. The existing interface is closed to modifications and new implementations must, at a minimum, implement that interface.

Robert C. Martin's 1996 article "The Open-Closed Principle"[5] was one of the seminal writings to take this approach. In 2001 Craig Larman related the open/closed principle to the pattern by Alistair Cockburn called Protected Variations, and to the David Parnas discussion of information hiding.[6]

## In my Words

쉽게 말해 확장은 허용하나 수정은 허용하지 않는다는 뜻이다. 클린코드에는 객체/자료 비대칭에 관한 내용이 나온다. 자료구조를 바탕으로 프로그램을 작성하는 절차지향 패러다임에서는 함수의 수정이 용이하나 확장 및 자료 구조의 변경에는 용이하지 않다. 그러나 객체지향 패러다임에서는 자료의 수정 및 확장에 용이하나 함수의 수정에는 용이하지 않다. 이를 다르게 풀어 쓴 말이 Open/Closed 원칙이라 생각한다. 하나의 언어로 문제를 푸는데 있어 객체지향과 절차지향을 섞어 사용할 수 있다고 생각한다. 정보처리 산업기사에서는 사상은 통일하라 했으나 이는 대규모의 유연하지 못한 기업에서 사용하는 방법이라 생각한다.