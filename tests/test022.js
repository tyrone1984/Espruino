/* Javascript eval */
// we now don't test JSON.parse here, because it doesn't parse functions 

mystructure = { a:39, b:3, addStuff : function(c,d) { return c+d; }, d:undefined, e: [ undefined ] };

mystring = "{ a:39, b:3, addStuff : function(c,d) { return c+d; }, d:undefined, e: [ undefined ] }"; 

// 42-tiny-js change begin --->
// in JavaScript eval is not JSON.parse
// use parentheses or JSON.parse instead
//mynewstructure = eval(mystring);
mynewstructure = eval("("+mystring+")");
//<--- 42-tiny-js change end

result = mynewstructure.addStuff(mynewstructure.a, mynewstructure.b) == 42;
