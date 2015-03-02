#!/bin/bash

IFS=$'\n'  

#list=`cat departmentsinnorway.txt`
left="NODE"

#112

counter=0

echo "graph all_graph{"

echo  "layout=neato;
overlap=scalexy; //false, compress, ...
//sep=+1; // 0.1, +1"

echo "node [shape=house,fontsize=10,label="\N", weight=0.5, width=0.5, height=0.3];"

 for i in `seq 1 112`; do
	 for j in `seq 1 112`; do
                if [ "$i" -ne "$j" ]
		then
			counter=$((counter+1))
			printf " \"#$i\" -- \"#$j\" \n"
		fi
	done
done

echo "}"


