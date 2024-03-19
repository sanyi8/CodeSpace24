
<?php
         $rota = array( 
            "ally" => array (
               "Monday" => '9am - 5pm',
               "Tuesday" => 'Day off',	
               "Wednesday" => '10am - 6pm'
            ),
            
            "jade" => array (
               "Monday" => 'Day off',
               "Tuesday" => '9am - 5pm',	
               "Wednesday" => '10am - 6pm'
            ),
            
            "hannah" => array (
               "Monday" => '10am - 6pm',
               "Tuesday" => '9am - 5-am',	
               "Wednesday" => 'Day off'
            )
         );
         
         /* Accessing multi-dimensional array values */
         echo "Rota for Ally on Monday : " ;
         echo $rota['ally']['Monday'] . "
"; 
         
         echo "Rota for Jade on Tuesday: ";
         echo $rota['jade']['Tuesday'] . "
"; 
         
         echo "Rota for Hannah on Wednesday : " ;
         echo $rota['hannah']['Wednesday'] . "
"; 
?>
   
   