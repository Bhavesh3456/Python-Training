#include<stdio.h>
int rectangle()
{
	int l,b;
	printf("enter length \n ");
	scanf("%d",&l);
	printf("enter breadth \n ");
	scanf("%d",&b);
	
	printf("area of rectangle is %d ",l*b);
}
int area()
{
	int r;
	float pie=3.14;
	printf("area of circle is %d ",r*r*pie);
}
int main()
{
	rectangle();
	area();
}
