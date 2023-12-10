
/*
        i/p: x,y,z three number
        o/p: max of three number
*/

#include <bits/stdc++.h>

using namespace std;


int main()
{
    int x,y,z;
    cout<<"Enter x:";
    cin>>x;
    cout<<"Enter y:";
    cin>>y;
    cout<<"Enter z:";
    cin>>z;
    cout<<"max of three number:";
    if(x>=y){
        if(x>=z)
            cout<<x<<endl;
        else
            cout<<z<<endl;
    }
    else{
        if(y>=z)
            cout<<y<<endl;
        else
            cout<<z<<endl;
    }

    return 0;
}