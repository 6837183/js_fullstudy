<!DOCTYPE html>
<html>
 <head>
  <title> 事件</title>  
  <script type="text/javascript">
   function count(){
       var d = "";
    var a=document.getElementById("txt1").value;   
    //获取第一个输入框的值
    var b=document.getElementById("txt2").value;
	//获取第二个输入框的值
    var c=document.getElementById("select").value;
	//获取选择框的值
    switch(c)
	{
     case "+":
     //d = a + b;
     d = parseInt(a)+parseInt(b);
     break;
     case "-":
     d = a-b;
     break;
     case "*":
     d = a*b;
     break;
     default:
     d = a/b;
     }
    document.getElementById("fruit").value   = d;
    
   }
  </script> 
 </head> 
 <body>
   计数器：<input type='text' id='txt1' /> 
   <select id='select'>
		<option value='+'>+</option>
		<option value="-">-</option>
		<option value="*">*</option>
		<option value="/">/</option>
   </select>
   <input type='text' id='txt2' /> 
   <input type='button' value='=' onclick="count()"/> <!--通过 = 按钮来调用创建的函数，得到结果--> 
   <input type='text' id='fruit' />   
 </body>
</html>