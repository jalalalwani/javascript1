/**************1****************/
mkdir homework
cd homework
touch blank.txt
/**************2****************/
touch greetings.txt
for i in {1..5};do echo 'Hello' >> greetings.txt;done
for i in {1..5};do cp greetings.txt $i.txt;done
/**************3****************/
echo "cat" > pets.txt
echo "dog" >> pets.txt
echo "hamster" >> pets.txt
/**************4****************/
echo "cat" > commands.txt
echo "ls" >> commands.txt
echo "pwd" >> commands.txt
/**************5****************/
grep -vf commands.txt pets.txt > lovelyCommands.txt
grep -vf pets.txt commands.txt >> lovelyCommands.txt