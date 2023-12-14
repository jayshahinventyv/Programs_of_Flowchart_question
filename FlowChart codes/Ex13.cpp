
/*
        i/p: 1! 3! 5! ...n=3
        o/p: 1 6 120
        
*/

#include <iostream>

int main() {
    int n;
    std::cin >> n;
    int fact = 1;
    int i = 3;
    
    while (i <= (n * n / 2)) {
        std::cout << fact << std::endl;
        fact = fact * i * (i - 1);
        i = i + 2;
    }
    
    return 0;
}