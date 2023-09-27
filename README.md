# HW03B Description

1. Firstly, I created a grid of circles using nested for loops, as we learned in class.
2. The instructions told us to 'jiggle' the circles, therefore I defined a 'jiggle' index using the random function, telling the circles to shift on the x & y axis by a random number from a range from 0 to 40. Additionally, the size of the circle should also be random, at minimum 25 and at max eDiam.
3. To make sure circles are not touching, I went back to the original for loop and defined that every new circle should have space around it, defined by the smallest circle diameter +2 (to ensure space not just avoid overlap) as well as +2 from the maximum diamater.
