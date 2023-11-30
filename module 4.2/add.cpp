#include<iostream>
using namespace std;
class calc
{
  public :
	  calc()
	 {
	 	int a,b;
	 	cout<<"enter any two value"<<endl;
	 	cin>>a>>b;
	 }
		void addition()
		{
			int sum,a,b;
			sum=a+b;
			
			
			cout<<"add of two value is  "<<sum;
		}
		void subtraction()
		{
			int sum,a,b;
			sum=a-b;
			
			cout<<" \n sub of two value is "<<sum;
	    }
		void multiplicaion()
		{
			int sum,a,b;
			sum=a*b;
			
			
			cout<<" \n multiplication of two value is "<<sum;
		}
	
};
main()
{
	calc c;
	c.addition();
	c.multiplicaion();
	c.subtraction();
}
