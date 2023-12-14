
/*
        i/p: 1! -3! 5! -7!  ....n=4
        o/p: 1 -6 120 -5040
        
*/

#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;

    int fact = 1;
    int i = 3;

    while (i <= (n * n / 2)) {
        cout << fact << endl;
        fact = fact * i * (i - 1) * (-1);
        i = i + 2;
    }

    return 0;
}