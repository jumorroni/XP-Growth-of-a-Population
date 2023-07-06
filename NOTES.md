Label
✅ done 🚧 WIP ❌ MOVED

DESCRIPTION:
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.

PARAMETERS:
p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

EXAMPLES:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

DOMAIN:
- p0, percent, aug (coming or leaving), p (population to equal or surpass)
- the function nb_year should return n number of entire years needed to get a population greater or equal to p.
- convert percent 

1º POMODORO: Driver: Juliana
- Create project ✅ 
- Set up the environment ✅ 
- Create DOMAIN ✅ 
- Commit ✅ 

2º POMODORO: Driver Juliana
- Understand what is the first test✅ 
- Create test "Should return the number of population 1500 when is sent by parameter"✅ 
- Make test fail✅ 
- Create prod code✅ 
- Make test pass✅ 
- Commit✅ 

3º POMODORO: Driver Juliana
- Create test "Should return the percentage of population 5 when is sent by parameter"✅ 
- Make test fail✅ 
- Create prod code✅ 
- Make test pass✅ 
- Commit✅ 

4º POMODORO: Driver Juliana
- Create test "Should return the number aug 100 when is sent by parameter"✅ 
- Make test fail✅ 
- Create prod code✅ 
- Make test pass✅ 

- Create test "Should return the number p 5000 when is sent by parameter"✅ 
- Make test fail✅ 
- Create prod code✅ 
- Make test pass✅ 
- Commit✅

- Create test "Should return the n number of entire years needed to get a population greater or equal to 5000"✅ 
- Make test fail✅ 
- Create prod code✅ 
- Make test pass✅ 

5º POMODORO: Driver Juliana
- Refactor code✅ 