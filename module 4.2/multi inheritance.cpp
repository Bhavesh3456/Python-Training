#include<iostream>
using namespace std;
class person
{
	public:
		
		char name[20];
		int age;
		void data()
		{
			cout<<"enter your name and age"<<endl;
			cin>>name>>age;
		}
};
class student
{
	public :
		float percentage;
		float total;
		void marks()
		{
	        cout<<"enter your total marks"<<endl;
	        cin>>total;
	        percentage=total/360*100;
	        cout<<"your percentage is "<<percentage;
		}
	
};
class teacher : public person,public student
{
	public :
		void sal()
		{
			int salary=50000;
		 cout<<" \n your salary is  "<<salary;
	    }
	
	
};
main()
{
	teacher t;
	t.data();
	t.sal();
	t.marks();
}
