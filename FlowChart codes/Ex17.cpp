
// Pattern : 1 2 3 2 3 4 5 4 3 4 5 6 7 6 5 4...  o/p : 6 7 8 9 1 0 9 8 ...

#include <iostream>

int main() {
    int n, i = 1, j;
    std::cin >> n;

    while (i <= n) {
        j = i;

        while (j <= 2 * i - 1) {
            std::cout << j%10 << " ";
            j++;
        }

        j = j-2;

        while (j >= i) {
            std::cout << j%10 << " ";
            j--;
        }

        i++;
    }

    return 0;
}
