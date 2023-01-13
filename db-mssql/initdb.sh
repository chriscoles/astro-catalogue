#!/bin/bash

#/opt/mssql/bin/sqlservr

# Wait for the MSSQL Server to initialize
echo "Waiting for connection to MSSQL Server"
sleep 10
while true; do
  /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P ${SA_PASSWORD} -Q "SELECT 1" | grep '1 rows affected' -C 999 && break
done
echo "Connected SQL Server"

# Create the DB
echo "Creating ASTRO DB"
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P ${SA_PASSWORD} -Q "CREATE DATABASE ASTRO"

# Run a SQL script to initialize the Messier Catalog
echo "Initialising Messier Catalog"
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P ${SA_PASSWORD} -i "initMessier.sql"

# Run a SQL script to initialize the NGC Catalog
echo "Initialising NGC Catalog"
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P ${SA_PASSWORD} -i "initNGC.sql"

echo "Finished Initialising"

# Display messier_catalog to check that rows are there
echo "Displaying DB table messier_catalog"
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P ${SA_PASSWORD} -Q "USE ASTRO;SELECT * from messier_catalog"