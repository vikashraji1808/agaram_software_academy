#include <iostream>
#include <string>
using namespace std;

class A{
    public:
    int*ptr;
    A(){
        ptr=new int();
    }

    A(const A & gfg)
    {
        ptr= new int();
        *ptr =*gfg.ptr; 
    }
};                                                                                                                                                                          

int main (){
    A obj;
    *obj.ptr=28;
    A obj1 = obj;
    *obj1.ptr=14;
    // obj1.fun();
    // return 0;
    printf("Class A%d\n",*obj.ptr);
    printf("Copy %d",*obj1.ptr);
}