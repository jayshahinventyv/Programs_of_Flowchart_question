
/*
        i/p: age
        o/p: if age>=21 then print "adult" else "not adult"
*/

#include <bits/stdc++.h>

using namespace std;


int main()
{
    int age;
    cout<<"Enter the age:";
    cin>>age;
    if(age>=21)
        cout<<"Adult"<<endl;
    else
        cout<<"Not Adult"<<endl;

    return 0;
}