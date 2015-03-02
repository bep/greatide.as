#!/bin/bash

IFS=$'\n'  

echo "digraph s2_graph{"

for i in `seq 1 4`; do
	echo "N$i [label=\"client$i.noreg.no\"]"
	echo "N$i -> A [ label = \"HTTP/2\" ] ;"
done

echo "A -> B -> C;"


echo "A [label=\"Authentication\", shape=\"octagon\"];"
echo "B [label=\"Authorization / ACL Filter\", shape=\"octagon\"];"
echo "C [label=\"GovAPI\", shape=\"octagon\"];"

echo "}"
