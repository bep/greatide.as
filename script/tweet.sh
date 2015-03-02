#!/bin/bash


if [ "$#" -lt 1 ]; then
    echo "Illegal number of parameters"
   exit 1
fi

MESSAGE=$1


CMD="beambuzz tweet -s greatide_as -m '$MESSAGE'"

if [ $# -eq 2 ]
  then
    CMD="$CMD -u $2"
fi

#
TMP=`atq -q g | sort | tail -1 | cut -d 'g' -f1 | cut -d '	' -f2`
LAST_TIME=`date --date="$TMP" "+%H:%M %Y-%m-%d"`

TIME_EXPRESSION=""
 if [ "$TMP" = "" ]; then
   TIME_EXPRESSION="now + 20 minutes"
else
   TIME_EXPRESSION="$LAST_TIME + 1 hours"
fi

echo $CMD | at -q g $TIME_EXPRESSION

