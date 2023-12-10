
/*
        i/p: 1! 3! 5! ...n=3
        o/p: 1 6 120
        
*/

#include <bits/stdc++.h>

using namespace std;


int main()
{
    int i,n;
    cout<<"Enter n:";
    cin>>n;
    for(i=1;i<=n*2;i+=2){
        int ans=1;
        for(int j=1;j<=i;j++){
            ans*=j;
        }
        cout<<ans<<" ";
    }

    return 0;
}