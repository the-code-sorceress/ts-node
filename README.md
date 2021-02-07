# ts-node-rest
A dockerised TS Node REST setup with typeorm.

This uses the open source @mvf/servicer npm package, designed to work with our infrastructure

# Setup 
Prequisites: Make and Docker
```sh 
git clone git@github.com:the-code-sorceress/ts-node-rest.git
cd ts-node-rest
make
```
Example request: http://localhost:9003/hello_world

# Teardown
```sh 
make down
```
