#!/bin/bash

# usage: bash post.sh 'slug'

DIR=_posts

# checking args
if [ $# != 1 ]; then
    echo 'Error! Usage: ./post.sh "<slug>"'
    exit -1
fi

# creating variables
filenamedate=`date +"%Y-%m-%d"`
postdate=$filenamedate'T'`date +"%H:%M:%S"`
slug=$1
filename=$filenamedate'-'$slug'.md'
filepath=$DIR/$filename

# creating posttemplate
touch $filepath
echo '---' >> $filepath
echo 'title: asd' >> $filepath
echo 'excerpt: asd' >> $filepath
echo 'date: "'$postdate'"' >> $filepath
echo 'coverImage: /assets/blog/cover.jpg' >> $filepath
echo 'ogImage:' >> $filepath
echo '  url: /assets/blog/cover.jpg' >> $filepath
echo 'comment: true' >> $filepath
echo 'db: false' >> $filepath
echo '---' >> $filepath
