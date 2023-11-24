#include<stdio.h>

int circle()
{
	int r,pie=3.14;
	printf("enter radius");
	scanf("%d",&r);
	printf("area of circle is :%d ",r*r*pie);

}
int area()
{
	int l,b;
	printf("enter length");
	scanf("%d",&l);
	printf("enter breadth");
    scanf("%b",&b);
	
	printf("area of rectangle is %d",l*b);	
}






int main()
{
	circle();
	area();
}
