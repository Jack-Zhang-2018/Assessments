#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

tempArray.map! {|element| element*2}

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

    1.  From what I have experienced with Ruby so far, I think that the coolest methods / constructs is .. and ... to create ranges.  They really make creating arrays a whole lot easier.

    Example:  To create the array [1, 2, 3, 4, 5, 6, 7, 8, 9. 10] all you have to do is type in [1...10]

    2.  The digits method is pretty cool.  You run it on a number and it returns an array of the individual digits of the number from the first digit to the last.

    Example:  If you run 1612.digits in irb you will get [2,1,6,1]

    3.  The count method is really helpful too.  It is an array method that counts the number of times a certain argument shows up in the given array.

    Example:  If you have [1, 2, 2, 3, 3, 3].count(3), irb would retrun 3 because the number 3 shows up 3 times in the array.  Likewise if you have [1, 2, 2, 3, 3, 3].count(2), irb would return 2.

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

Corrections:
  -  The class name was capitalized
  -  Added the attribute accessor helper method
  -  Removed the parentheses and curly brace punctuation in the if block
  -  Changed day to @day in the if and elsif condition
  -  Changed elseif to elsif
  -  Added an end to the if block

``` ruby
class Example

  attr_accessor :day

  def initialize(day)
    @day=day
  end

  def Say_hi
    if @day == "Friday"
      puts "TGIF!"
    elsif @day == "Monday"
      puts "Its monday again"
    else
      puts "another day"
    end
  end
end
```
