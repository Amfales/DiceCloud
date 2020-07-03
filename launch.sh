#!/bin/bash
docker container run -it --name dicecloud --rm -p 3000:3000 -p 3003:3003 -v $(pwd)/app:/home/dicecloud/app amfales/dicecloud:1.1
