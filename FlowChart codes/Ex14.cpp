
/*
        Pattern: 1 -2 3 -4 5 -6 ....n=10
        
*/

#include <iostream>

int main() {
    int n;
    std::cout << "Enter a number: ";
    std::cin >> n;

    int j = 1;
    int i = 1;

    while (i <= n) {
        std::cout << i * j << " ";
        i++;
        j *= -1;
    }

    return 0;
}