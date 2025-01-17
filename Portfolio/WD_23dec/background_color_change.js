let color=prompt("Enter your color")
switch(color)
{
    case "blue":
        document.body.style.backgroundColor="blue";
        break;
    case "yellow":
        document.body.style.backgroundColor="yellow";
        break;
    case "green":
        document.body.style.backgroundColor="green";
        break;
    default:
        document.body.style.background="black";
        break;
}