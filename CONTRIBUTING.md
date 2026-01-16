# Contributing

## Workflow
- Trunk-based development on `main`.
- Create short-lived feature branches from `main`.
- All changes go through pull requests with at least one approval.

## Branch Naming
Use the format:
- `feat/<short-description>`
- `fix/<short-description>`
- `chore/<short-description>`

## Conventional Commits
Examples:
- `feat: add campus viewer overlay`
- `fix: correct camera controls`
- `chore: update CI`

## Pull Request Rules
- Keep PRs focused and small.
- Add screenshots for UI changes.
- Ensure CI passes and branch is up to date with `main`.

## Local Setup
- Install Node.js 20 and Python 3.12.
- Follow the `frontend/README.md` and `backend/README.md` instructions.

## Code Style
- Use Prettier defaults for frontend.
- Use `ruff` for Python formatting and linting.

## Large Files
- **No large binaries in git history.**
- Track 3D assets and textures in Git LFS.
