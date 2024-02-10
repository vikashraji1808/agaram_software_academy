#include <iostream>
#include <string>
using namespace std;

class A 
{
    public:
    virtual void fun()=0;
    void fun1(){
        cout << "welcome All";
    }

};
class B :public A
{
    public:
    void fun(){
        cout << "hi sheik" << endl;
    }

};

int main(){
    B obj;
    obj.fun();
    obj.fun1();
}

// interface ella functionum virtual irundha interface oki