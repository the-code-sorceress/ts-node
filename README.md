# ts-node-stretch
A dockerised TS Node setup with typeorm. 

This uses the open source @mvf/servicer npm package which supports configuration for 
- Expres
- Apollo
- SQS
- Commands
- Combination of the above

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
