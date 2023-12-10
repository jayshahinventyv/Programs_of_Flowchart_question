
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
        if(i%2==0){
            j=i*-1;
        }
        else{
            j=i*1;
        }
        cout<<j<<" ";
    }

    return 0;
}