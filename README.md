# 3D Campus Navigator Prototype

A student-built prototype for viewing and navigating a university campus in 3D.

## Goals
- Deliver a functional proof-of-concept viewer for a campus scene.
- Keep the stack minimal and approachable for Windows-based onboarding.
- Support an optional Python backend and tooling pipeline.

## Tech Stack
- **Frontend:** Babylon.js (web 3D)
- **Backend/Tools:** Python (optional API + asset pipeline utilities)

## Repo Map
- `frontend/` Babylon.js web app
- `backend/` Optional API and services
- `tools/` Automation, asset pipeline scripts
- `assets/` Asset manifests, metadata, and LFS-tracked models/textures
- `docs/` Architecture and process documentation
- `infra/` Infrastructure and deployment notes

## Quick Start
### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend (optional)
```bash
cd backend
python -m venv .venv
. .venv/Scripts/activate  # Windows PowerShell: .venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md).
