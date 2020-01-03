#!/bin/bash

COMMIT=`git rev-parse HEAD | cut -c 1-8`
TIME=`date +"%m-%d-%Y %T %Z"`

rm -r build/
mkdir build/
cp * build/ -r
cd build/

# Insert build info
sed -i "s/[{][{]COMMIT[}][}]/$COMMIT/g" *.html
sed -i "s/[{][{]COMMIT[}][}]/$COMMIT/g" */*.html
sed -i "s/[{][{]TIME[}][}]/$TIME/g" *.html
sed -i "s/[{][{]TIME[}][}]/$TIME/g" */*.html

# Build Footer
sed -i $'/[{][{]FOOTER[}][}]/{r footer.build.html\nd}' *.html
sed -i $'/[{][{]FOOTER[}][}]/{r footer.build.html\nd}' */*.html

# Build Menu
sed -i $'/[{][{]MENU[}][}]/{r menu.build.html\nd}' *.html
sed -i $'/[{][{]MENU[}][}]/{r menu.build.html\nd}' */*.html


# Clean up after ourselves
rm -r build/
