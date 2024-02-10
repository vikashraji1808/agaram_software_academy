#include <iostream>
#include <string>
using namespace std;

class A 
{
    public:

    int c=10; 
    A operator * (const A & obj)
    
    {
        A obj2;
        obj2.c = c*obj.c;
        return obj2;
    }
}; 

int main (){
    A obj;
    A obj1;
    A obj2 = obj*obj1;
    cout << obj2.c;

}