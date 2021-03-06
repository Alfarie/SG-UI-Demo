#!/bin/bash
echo "Script executed from: ${PWD}"

BASEDIR=$(dirname $0)
echo "Script location: ${BASEDIR}"


KILLP="sudo pkill -9 node"
CMD="sudo node ${BASEDIR}/src/main.js -sp=/dev/tty.usbserial-DN0358X8 --iface=en0 --loggerTime=60000 -prod"  #--wificustom

echo "[INFO] KILLING NodeJs Process..."
# $KILLP
sleep 2

$CMD