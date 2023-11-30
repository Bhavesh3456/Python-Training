#include<iostream>
using namespace std;
class cricketer
{
	public:
		
		
		void bat()
		{
			int runs=3000;
		    int out=6;
		    int avg;
			avg=runs/out;
			cout<<"the average of batsman is "<<avg;
			cout<<" \n the total run of batsman is "<<runs;
		}
		
};
class batsman : public cricketer
{
	
};
main()
{
	batsman b;
	b.bat();
}
