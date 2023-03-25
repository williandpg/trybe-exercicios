mkdir unix_tests

cd unix_tests

touch trybe.txt

cp trybe.txt trybe_backup.txt

mv trybe.txt trybe.old.txt

mkdir backup

mv trybe_backup.txt backup

mkdir backup2

mv backup/trybe_backup.txt backup2

rmdir backup

mv backup2 backup

pwd

ls

rmdir backup

clear

touch skills.txt

Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

cat skills.txt | head -5

cat skills.txt | tail -5

rm -rf *.txt