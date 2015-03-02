#!/bin/bash

IFS=$'\n'  

#list=`cat departmentsinnorway.txt`
left="NODE"

#112


echo "digraph all_graph{"

echo  "layout=neato;
overlap=scalexy; //false, compress, ...
//sep=+1; // 0.1, +1
"

echo "node [shape=house,fontsize=10, weight=0.5, width=0.5, height=0.3];"

 for i in `seq 1 112`; do
	 printf " \"MASTER\" -> \"#$i\" \n"
done

echo "}"



