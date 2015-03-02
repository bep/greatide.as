#!/bin/bash

IFS=$'\n'  

echo "digraph s1_graph{"

for i in `seq 1 6`; do
	echo "A -> \"https://node$i.noreg.no:\n/govbots.txt\n/datamap.json\" [ label = \"HTTP/2\" ];"
done

echo "A [label=\"GovBot\", shape=\"octagon\"];"

echo "}"
