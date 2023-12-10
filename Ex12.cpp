
/*
        Pattern: 1 1 2 1 1 2 3 2 1 1 2 3 4 3 2 1 .... n=4
*/

#include <bits/stdc++.h>

using namespace std;


int main()
{
    int i,n;
    cout<<"Enter n:";
    cin>>n;
    for(i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<j<<" ";
        }
        for(int j=i-1;j>=1;j--){
            cout<<j<<" ";
        }
    }
    
    
    

    return 0;
}