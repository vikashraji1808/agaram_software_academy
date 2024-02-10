/////Diomand problem /////
#include <iostream>
#include <string>
using namespace std;

class A{
    public:
    A(){
        cout << "constructor A"<<"\n";
    };
    void fun(){
        cout <<"welcome vikash"<<"\n";
    }
    ~A(){
        cout << "deconstructor A"<<"\n";
    }
};
class B :virtual public A{
    public:
    B(){
        cout << "constructor B"<<"\n";
    };
    ~B(){
        cout << "deconstructor B"<<"\n";
    }
};
class C :virtual public A{ 
    public:
    C(){
        cout << "constructor C"<<"\n";
    };
    ~C(){
        cout << "deconstructor C"<<"\n";
    }
};
class D : public B,public C{ 
    public:
    D(){
        cout << "constructor D"<<"\n";
    };
    ~D(){
        cout << "deconstructor D"<<"\n";
    }
};
int main(){
    D obj;
    obj.fun();
    return 0;
}