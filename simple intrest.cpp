#include<stdio.h>
int main()
{
	int sum,p,r,i;
	printf("enter principle");
	scanf("%d",&p);
	printf("enter rate");
	scanf("%d",&r);
	printf("enter intrest");
	scanf("%d",&i);
	sum=p*r*i/100;
	
	
	printf("simple intrest is : %d",sum);
}
