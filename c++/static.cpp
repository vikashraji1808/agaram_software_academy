#include <iostream>
#include <string>
using namespace std;

class A {
    public:
    int a;        
    static int k; 

    static void fun() {
        cout << "value of k :" << k << endl;
    }
};
int A::k = 0;
int main(){
    A obj;
    obj.a= 100;
    A obj1;
    obj1.a=200;
    A::k=402;
    cout << "obj value :" << obj.a <<", "<< "obj k vlaue :" << A::k << endl;
    cout << "obj1 value :" << obj1.a <<", "<< "obj1 k value :" << A::k << endl;
    return 0;

}