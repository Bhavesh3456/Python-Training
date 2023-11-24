#include<stdio.h>
int main()
{
	int a,b;
	printf("enter first number\n");
	scanf("%d",&a);
	printf("enter second number\n");
	scanf("%d",&b);
	char choice;
	printf("enter your choice\n");
	scanf("%c",&choice);
	switch(choice)
	{
		case '+':
			printf("addition",a+b);
			break;
		case '-':
			printf("subtraction",a-b);
			break;
		case '*':
			printf("multiplication",a*b);
			break;
		case '/':
			printf("division ",a/b);
			break;
		default:
			printf("%d \n",a+b);
			printf("%d \n",a-b);
			printf("%d\n",a*b);
			printf("%d \n",a/b);
	}
}

