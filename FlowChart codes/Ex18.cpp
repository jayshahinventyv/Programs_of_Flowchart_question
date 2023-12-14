// Pattern: 1 1 1 3 2 5 3 7 5 9 8 11 13 13 ...n=7

// Pattern : 1 2 3 2 3 4 5 4 3 4 5 6 7 6 5 4... n=4

#include <iostream>
using namespace std;
int main() {
   int n,sum,x=1,j=1,i=1;
   cin>>n;
   for(;x<=n;x++){
       cout<<i<<" ";
       sum=i+j;
       i=j;
       j=sum;
      cout<<2*x-1<<" ";
   }

    return 0;
}
