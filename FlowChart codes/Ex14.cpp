
/*
        Pattern: 1 -2 3 -4 5 -6 ....n=10
        
*/

#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n;
    cout<<"Enter n:";
    cin>>n;
    int j=1;
    for(int i=1;i<=n;i++){
        cout<<i*j<<" ";
        j=j*(-1);
    }

    return 0;
}