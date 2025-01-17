//alert("press 1 for shoes 2 for sandles and 3 for sleepers")
//let order=parseInt(prompt("enter your order no"))
//switch(order)
//{
//    case 1:
//        console.log("you order shoes");
//        break;
//    case 2:
//        console.log("you order sandles");
//        break;
//    case 3:
//        console.log("you order sleepers");
//        break;
//    default:
//
 //       console.log("kindly select your option");
//       break;
//}
let pr=parseFloat(prompt("enter your pr"));
let grade;
if(pr>80 )
{
    grade="A+";
}
else if(pr>60)
{
    grade="B+";
}
else if(pr>=35)
{
    grade="pass";
}
else if(pr>0 && pr<35)
{
    grade="fail";
}
else{
    console.log("enter valid pr");
}
console.log(grade);