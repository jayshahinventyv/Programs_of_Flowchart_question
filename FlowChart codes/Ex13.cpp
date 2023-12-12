
/*
        i/p: 1! 3! 5! ...n=3
        o/p: 1 6 120
        
*/

#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n,i=3,fact=1;
    cout<<"Enter n:";
    cin>>n;
    for(;i<=(n*n)/2;i+=2){
        cout<<fact<<" ";
        fact=fact*i*(i-1);
    }

    return 0;
}