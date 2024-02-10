#include <iostream>
#include <string>
using namespace std;

class A {
public:
    int c = 10; 

    // Overloading the assignment operator
    A operator=(const A& obj1) {
        this->c=obj1.c;
        return obj1;
    }
}; 

int main() {
    A obj;
     A obj1;
    obj1.c = 78; // This line would throw a compilation error, as there's no suitable assignment operator for this case
    obj = obj1;
    cout << obj.c;

    return 0;
}