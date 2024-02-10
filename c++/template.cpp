#include <iostream>
#include <string>
using namespace std;

class A 
{
    public:
    template <typename T>
    T add(T a,T b){
        return a+b;
    }
    template <typename T , typename S>
    T add1(T a,S b){
        return a + b;
    }
    
};
template <typename T , typename S>
class B
{
    public:
    T a;
    S b;
    S fun()
    {
        return a + b;
    }
};
int main (){
    A obj;
   int result = obj.add(1,2);
    cout << result << endl;
    A obj1;
    float result1= obj1.add1(2.5,2);
    cout << result1 << endl;
    B<int,float> obj2;
    obj2.a=2;
    obj2.b=2.5;
    float result2= obj2.fun();
    cout << result2 << endl;
    return 0;
}
