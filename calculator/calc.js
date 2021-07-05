function dis(val)
         {
             document.getElementById("display").value+=val
         }
           
         //function that evaluates the digit and return result
         function solve()
         {
             let x = document.getElementById("display").value
             let y = eval(x)
             document.getElementById("display").value = y
         }
           
         //function that clear the display
         function clr()
         {
             document.getElementById("display").value = ""
         }