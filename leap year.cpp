#include<stdio.h>
int main()
{
	int y;
	printf("enter any year");
	scanf("%d",&y);
	if (y%4==0 && y%400==0 && y%100==0)
	{
		printf("it is leap year");
	}
	else
	{
		printf("it is not leap year");
	}
}
