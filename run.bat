autocannon -c 500 -d 30 -p 10 http://localhost:3000



timeout 10s ab -n 100000 -c 500 http://localhost:8080/ > result.txt && cat result.txt 

sudo apt install apache2-utils   # Debian/Ubuntu
sudo yum install httpd-tools     # CentOS/RHEL
