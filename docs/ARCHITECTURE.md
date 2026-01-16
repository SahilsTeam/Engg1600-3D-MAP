# Architecture

## Components
- **Viewer (Babylon.js):** Renders the 3D campus scene and UI overlays.
- **Backend (optional):** Serves metadata, auth, or routing data when needed.
- **Tools:** Asset pipeline scripts to validate or convert campus models.

## Data Flow
1. Viewer loads static assets (glTF/GLB) from LFS-backed storage.
2. Viewer requests optional metadata from the backend API.
3. Tools validate asset naming and metadata schemas before release.

## Key Decisions
- Use glTF/GLB for 3D assets.
- Keep binaries in Git LFS or external storage only.
- Prioritize a small, fast loading demo scene for the prototype.
