Script para cambiar los archivos: en bash
find src -name "\*.js" -exec sh -c 'mv "$1" "${1%.js}.ts"' \_ {} \;
