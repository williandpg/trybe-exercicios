mkdir unix_tests_skills

cd unix_tests_skills

touch skills2.txt

echo "Internet" >> skills2.txt

echo "Unix" >> skills2.txt

echo "Bash" >> skills2.txt

echo "HTML" >> skills2.txt

echo "CSS" >> skills2.txt

echo "JavaScript" >> skills2.txt

echo "React" >> skills2.txt

echo "SQL" >> skills2.txt

cat skills2.txt | wc -l

sort < skills2.txt | head -n 3 > top_skills.txt

touch phrases2.txt

echo "Lorem ipsum dolor sit amet." > phrases2.txt

echo "Consectetur adipiscing elit." >> phrases2.txt

echo "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." >> phrases2.txt

echo "Ut enim ad minim veniam." > phrases2.txt

echo "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." > phrases2.txt

echo "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." > phrases2.txt

echo "Excepteur sint occaecat cupidatat non proident." > phrases2.txt

echo "Sunt in culpa qui officia deserunt mollit anim id est laborum." > phrases2.txt

grep -c br phrases2.txt

grep -vc br phrases2.txt

echo "Brazil" >> phrases2.txt

echo "Argentina" >> phrases2.txt

cp countries.txt bunch_of_things.txt

cat phrases2.txt >> bunch_of_things.txt

sort bunch_of_things.txt -o bunch_of_things.txt