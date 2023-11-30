#include<iostream>
using namespace std;
class calculator
{
    
	public :	
	void addition()
	{
		int a,b,sum;
	    cout<<"enter any two value"<<endl;
	    cin>>a>>b; 
	
		sum=a+b;
		cout<<"addition of two value is "<<sum;
	}
	void subtraction()
	{
		int a,b,sum;
	    cout<<"enter any two value"<<endl;
	    cin>>a>>b; 
	
		sum=a-b;
		cout<<"suntraction of two value is "<<sum;
	}
	void multiplication()
	{
		int a,b,sum;
	    cout<<"enter any two value"<<endl;
	    cin>>a>>b; 
		sum=a*b;
		cout<<"multiplication of two value is "<<sum;
	}
};
main()
{
	calculator c;
	c.addition();
	c.subtraction();
	c.multiplication();
}
