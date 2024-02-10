#include <iostream>
#include <string>
#include "namespace1.h"
#include "namespace2.h"

int main() {
    one::A obj;
    obj.fun();
    second::A obj1;
    obj1.fun();
    return 0;
} 