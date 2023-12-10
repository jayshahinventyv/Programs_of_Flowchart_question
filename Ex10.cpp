
/*
        i/p: x,y,z,w four number
        o/p: max of four number
*/

#include <bits/stdc++.h>

using namespace std;


int main()
{
    int x,y,z,w;
    cout<<"Enter x:";
    cin>>x;
    cout<<"Enter y:";
    cin>>y;
    cout<<"Enter z:";
    cin>>z;
    cout<<"Enter w:";
    cin>>w;
    cout<<"max of four number:";
    if(x>=y){
        if(x>=z){
            if(x>=w)
                cout<<x<<endl;
            else
                cout<<w<<endl;
        }
        else{
            if(w>=z)
                cout<<w<<endl;
            else   
                cout<<z<<endl;
        }
    }
    else{
        if(y>=z){
            if(w>=y)
                cout<<w<<endl;
            else
                cout<<y<<endl;
        }
        else{
            if(w>=z)
                cout<<w<<endl;
            else   
                cout<<z<<endl;
        }
    }

    return 0;
}