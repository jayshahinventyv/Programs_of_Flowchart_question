
/*
        i/p: input value,and char as ruppes or paisa
        o/p: convert ruppes to paisa or visa-versa
*/

#include <bits/stdc++.h>

using namespace std;


int main()
{
    int i;
    cout<<"Enter the input:";
    cin>>i;
    cout<<"Enter the char as rs,paisa:";
    char c;
    cin>>c;
    cout<<"Ans:";
    if(c=='R'){
        cout<<i*100<<endl;
    }
    else{
        if(c=='P')
            cout<<i/100<<endl;
        else
            cout<<"Invalid Move"<<endl;
    }

    return 0;
}