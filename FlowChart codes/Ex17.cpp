
// Pattern : 1 2 3 2 3 4 5 4 3 4 5 6 7 6 5 4...  o/p : 6 7 8 9 1 0 9 8 ...

#include <iostream>
using namespace std;

int main() {
    int n, i = 1, j;
    cout << "Enter a value for n: ";
    cin >> n;

    while (i <= n) {
        j = i;
        while (j <= 2 * i - 1) {
            cout << j % 10;
            j++;
        }
        cout << endl;
        i++;
    }

    return 0;
}