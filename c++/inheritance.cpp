// Online C++ compiler to run C++ program online
#include <iostream>
#include <string>
using namespace std;

class Bike{
    public:
    string brand = "hero";
    void hero(){
        cout << "brands: \n";
}
};
class car : public Bike{
    public:
    string car ="ford";
};

int main (){
    car obj;
    obj.hero();
    cout << obj.brand << /"\n" << obj.car;
    return 0;
}





// class Bike{
//     public:
//     string brand = "hero";
//     void hero(){
//         add();
//         cout << "brands: \n";
        
//         }
//     private:
       
//         add(){
//             int a=6;
//             int b=6;
//             int c;
//             c=a+b;
//             }
// };
// class car : public Bike{
//     public:
//     string car ="ford";
// };

// int main (){
//     car obj;
//     obj.hero();
//     cout << obj.brand <<"\n" << obj.car;
//     return 0;
// }