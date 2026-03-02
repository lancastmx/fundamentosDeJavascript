Script para cambiar los archivos: en bash
find src -name "\*.js" -exec sh -c 'mv "$1" "${1%.js}.ts"' \_ {} \;

git bash listado de archivos por carpetas,. v
find . -type f \
 ! -path "_/node_modules/_" \
 ! -path "_/.git/_" \
 ! -path "_/.husky/_" \
 | sort
