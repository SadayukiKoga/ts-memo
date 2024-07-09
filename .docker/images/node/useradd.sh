#!/bin/bash

USER_ID=${HOST_UID:-9001}
GROUP_ID=${HOST_GID:-9001}
WORKDIR=/var/www

echo "Starting with UID : $USER_ID, GID: $GROUP_ID"
useradd -u $USER_ID -o -m nodeuser
groupmod -g $GROUP_ID nodeuser
export HOME=/home/nodeuser

mkdir -p $WORKDIR && chown -R $USER_ID:$GROUP_ID $WORKDIR
