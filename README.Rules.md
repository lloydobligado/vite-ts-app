# Rules

## Naming conventions

- `kebab-case` - for all folders/files.
- `PascalCase` - for classes and types.
- `snake_case` - for database tables and columns.
- `camelCase` - for functions, zod schemas and etc.

## Folder structure

- `src` - main source code.
- `src/routes` - for tanstack router.
  - `src/routes/<route-name>.tsx` - for route page component.
  - `src/routes/<route-name>.lazy.tsx` - for lazy route page component.

### Features

- `src/features` - for feature modules.
  - `src/features/<feature-name>` - for feature module.
    - `src/features/<feature-name>/components` - for components.
    - `src/features/<feature-name>/actions` - for server actions.
    - `src/features/<feature-name>/hooks` - for hooks.
    - `src/features/<feature-name>/constants` - for constants.
    - `src/features/<feature-name>/stores` - for zustand stores.
    - `src/features/<feature-name>/utils` - for utilities.

### Shared

- `src/shared` - shared modules.
  - `src/shared/components` - for shared components.
    - `src/shared/components/ui` - for shared ui components (`button`, `input` & etc).
  - `src/shared/hooks` - for shared hooks.
    - `src/shared/hooks/mutation` - for shared `react-query` mutation.
    - `src/shared/hooks/query` - for shared `react-query` query.
  - `src/shared/stores` - for shared zustand stores.
  - `src/shared/utils` - for shared utilities.
  - `src/shared/constants` - for shared constants.
  - `src/shared/types` - for shared types.
