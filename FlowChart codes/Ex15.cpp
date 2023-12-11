
/*
        i/p: 1! -3! 5! -7!  ....n=4
        o/p: 1 -6 120 -5040
        
*/

#include <bits/stdc++.h>

using namespace std;


int main()
{
    int i,n;
    cout<<"Enter n:";
    cin>>n;
    int x=1;
    for(i=1;i<=n*2;i+=2){
        int ans=1;
        for(int j=1;j<=i;j++){
            ans*=j;
        }
        if(x%2==0){
            ans*=-1;
        }
        else{
            ans*=1;
        }
        x++;
        cout<<ans<<" ";
    }

    return 0;
}