// Online C++ compiler to run C++ program online
#include <iostream>
#include <string>
using namespace std;

class Bike{
    public:
    string brand = "hero";
    void hero(){
        add();
        cout << "brands: \n";
        
        }
    virtual void addnum(int a){
        cout << a <<"\n";
    }
    virtual void addnum(int a,int b){
        int c;
        c=a+b; 
        cout << c <<"\n";
    }
    private:
        int a=6;
        int b=6;
        int c;
        void add(){
            
            c=a+b;
            cout<<c<<"\n";
            }
    protected:
    string name;
    
};
class car : public Bike{
    public:
    string car ="ford";
    void setname(string n){
        name = n;
    };
    void getname(){
        cout << name;
    };
    virtual void addnum(int a){
        cout << a <<"\n";
    }
    void addnum(int a,int b){
        int c;
        c=a+b;
         cout << c <<"\n";
    }
};

int main (){
    car obj;
    obj.hero();
    obj.addnum(42);
    obj.addnum(1,2);
    obj.setname("vikasharputharaj");
    Bike*ptr=new car();
    ptr->addnum(420);
    delete(ptr);
    ptr=new car;
    ptr->addnum(40);
    delete(ptr);
    cout << obj.brand <<"\n"; 
    cout << obj.car <<"\n";
    obj.getname();
    return 0;
}





