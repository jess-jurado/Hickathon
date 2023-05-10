#!/bin/bash

# Update package list and install PostgreSQL and its contrib modules
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib

# Start the PostgreSQL service
sudo service postgresql start

# Prompt user to enter a username and create a new PostgreSQL user with the entered name
echo "Enter a username for the new PostgreSQL user:"
read username
sudo -u postgres createuser --interactive --pwprompt $username

# Prompt user to enter a database name and create a new PostgreSQL database with the entered name
echo "Enter a name for the new PostgreSQL database:"
read dbname
sudo -u postgres createdb --owner $username $dbname

# Connect to the new database as the new user and create a new table
sudo -u $username psql -d $dbname << EOF
CREATE TABLE users (
    email TEXT,
    password INT
);
INSERT INTO users VALUES ('Michael', 30);
EOF

# Edit the PostgreSQL configuration file to allow remote connections
sudo nano /etc/postgresql/12/main/postgresql.conf
# Uncomment the line: listen_addresses = '*'

# Restart the PostgreSQL service and allow incoming traffic on port 5432 in the firewall
sudo service postgresql restart
sudo ufw allow 5432