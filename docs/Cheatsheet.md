Script para cambiar los archivos: en bash
find src -name "\*.js" -exec sh -c 'mv "$1" "${1%.js}.ts"' \_ {} \;

git bash listado de archivos por carpetas,. v
find . -type f \
 ! -path "_/node_modules/_" \
 ! -path "_/.git/_" \
 ! -path "_/.husky/_" \
 ! -path "_/dist/_" \
 ! -path "_/api/_" \
 | sort
find . -type f \
 ! -path "_/node_modules/_" \
 ! -path "_/.git/_" \
 ! -path "_/.husky/_" \
 ! -path "_/dist/_" \
 ! -path "_/api/_" \
 | sort
lanca@Lancast MINGW64 /d/aprenderProgramacion/fundamentosDeJavaScript (feature/sprint-2-user-domain-state-pattern)
$ find . -type f ! -path "_/node_modules/_" ! -path "_/.git/_" ! -path "_/.husky/_" ! -path "_/dist/_" ! -path "_/api/_" | sort

```
// find . -maxdepth 4 -not -path '*/.*' -not -path './node_modules*' -not -path './dist*'
// find . -maxdepth 4 -not -path '*/.*' -not -path './node_modules*' -not -path './dist*'   -exec ls -lh {} \;
```

.
├── src/
│ ├── index.ts
│ ├── config.ts
│ ├── network/
│ └── modules/
│ ├── user/
│ │ ├── domain/
│ │ │ ├── states/
│ │ │ │ ├── active-user.state.ts
│ │ │ │ └── pending-user.state.ts
│ │ │ ├── user.entity.ts
│ │ │ └── user.repository.ts
│ │ └── application/
│ └── organization/
│ └── domain/
│ ├── organization.entity.ts
│ └── membership.entity.ts
├── package.json
└── tsconfig.json
