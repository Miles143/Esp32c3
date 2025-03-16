// Repersenting Real Numbers //


In binary the base is 2, since we are not working in base 10, the decimal point is referred to as
a radix point. This term can be used in any base. Positions to the right of the radix point in
binary are the halves position (ex: one half) the quaters position (one quater), etc.

Store the value as an integer and include information showing where the radix point is.
Any real value has three properties the sign(pos/neg), the mantissa, which is made up of
the digits in the value with the radix point assumed to be to the right, and the exponent,
which determines the how the radix point is shifted relative to the mantissa.
ex formula: sign * mantissa * 10exp

Real Value:            Floating-Point Value:
12001.00               12001*10(0)
-120.01               -12001*10(-2)
0.12000                12000*10(-5)
-123.10               -12310*10(-2)
155555000.00           155555*10(3)


/**
 * 
 */