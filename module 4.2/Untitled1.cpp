#include<iostream>
using namespace std;

class bank
{
	public:
		void assign()
		{
		  	string name;
		  	int number=3432245;
		  	string account;
		  	int bal=50000;
		  	cout<<"customer name is abc"<<name;
		  	cout<<"\n you have saving account"<<account;
		  	cout<<"\n your account no is "<<number;
		  	cout<<"\n your bal is  "<<bal;
		  	
		}
		void deposite()
		{
			int bal=50000;
			int dep=10000;
			
			cout<<" \n balance after deposite  is "<<bal+dep;
		}
		void withdraw()
		{
			int amt=60000;
			int with=15000;
			
			cout<<" \n balance after withdraw is "<<amt-with;
		}
		
		
};
main()
{
	bank det;
	det.assign();
	det.deposite();
	det.withdraw();
}
