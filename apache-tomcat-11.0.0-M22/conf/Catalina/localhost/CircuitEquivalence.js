// Circuit Equivalence //


Ex:
  Boolean Expression:
  	Distributive Law:
  		A(B+C) = AB + AC

Logic Diagram:
                       ___
  A___________________(   )______A(B+C) 
             ___     _(___)
  B_________(   )___|                                                                           
  C_________(___)    B+C                                                          
                                                
   Truth Table:
   
       A   B   C   B+C   A(B+C)
  //   0   0   0    0     0
  //   0   0   1    1     0
  //   0   1   0    1     0
  //   0   1   1    1     0
  //   1   0   0    0     0
  //   1   0   1    1     1
  //   1   1   0    1     1
  //   1   1   1    1     1 
                                        
/**
 * 
 */