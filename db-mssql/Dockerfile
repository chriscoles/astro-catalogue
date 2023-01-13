FROM mcr.microsoft.com/mssql/server:2017-latest

EXPOSE 1433

USER root

ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=My_Password1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy script and sql files
COPY ./entrypoint.sh /usr/src/app
COPY ./initdb.sh /usr/src/app
COPY ./initMessier.sql /usr/src/app
COPY ./initNGC.sql /usr/src/app
COPY ./messier.csv /usr/src/app
COPY ./ngc.csv /usr/src/app

# Make scripts executable
RUN chmod +x /usr/src/app/*.sh

# Init DB
CMD /bin/bash ./entrypoint.sh