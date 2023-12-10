
/*
        i/p: l,b given
        o/p: area and perimeter of rectangle
*/

#include <bits/stdc++.h>

using namespace std;


int main()
{
    int l,b;
    cout<<"Enter the length:";
    cin>>l;
    cout<<"Enter the breadth:";
    cin>>b;
    int area=l*b;
    cout<<"Area of Rectangle:";
    cout<<area<<endl;
    int perimeter=2*(l+b);
    cout<<"Perimeter of Rectangle:";
    cout<<perimeter<<endl;

    return 0;
}