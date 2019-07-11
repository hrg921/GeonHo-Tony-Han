#include <iostream>

int main()
{
  double num1, num2;

  std::cin >> num1 >> num2;

  std::cout.precision(10);
  std::cout << (num1 / num2);
}