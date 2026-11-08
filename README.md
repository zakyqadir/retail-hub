# Retail Operations Unified Portal Hub

A single command center linking your retail operations modules:
1. **Action Tracker** (`https://github.com/zakyqadir/actiontracker`)
2. **Store Checklist** (`https://github.com/zakyqadir/store_checklist`)
3. **Location Tracker** (`https://github.com/zakyqadir/locationtracker`)
4. **Report Dashboard** (`https://github.com/zakyqadir/retaildashboard`)

## Features
- **Zero Installation / Pure Web**: Runs directly in any web browser, tablet, or smartphone.
- **Dynamic URL Configuration**: Easily switch between your GitHub Repos and live deployed URLs (Vercel, Streamlit, Cloudflare, etc.) using the in-app "Configure URLs" settings button without touching code.
- **Dual Launch Modes**:
  - **New Tab Mode**: Opens modules in a clean new tab.
  - **Split Preview Mode**: Embedded iframe preview inside the portal.
- **Built-in Quick GPS Check-In**: Instant device coordinate capture for field audits.
- **Filter & Search**: Quickly search modules and tags.

## How to Run Locally

You can simply open `index.html` in your browser:
```bash
# On macOS
open index.html

# Or start a local server
python3 -m http.server 3000
```

## How to Host Free on GitHub Pages (Recommended)

1. Create a repository on GitHub named `retail-portal` (or `zakyqadir.github.io`).
2. Push `index.html` to the repository:
   ```bash
   git init
   git add index.html README.md
   git commit -m "feat: initial retail operations portal hub"
   git branch -M main
   git remote add origin https://github.com/zakyqadir/retail-portal.git
   git push -u origin main
   ```
3. Go to **Repository Settings** > **Pages** > Select `main` branch > **Save**.
4. Your single URL will be live at:
   `https://zakyqadir.github.io/retail-portal/`
