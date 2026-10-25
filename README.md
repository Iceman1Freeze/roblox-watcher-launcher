# Roblox server launcher

This directory is the complete standalone static site. Publish **only this
directory** to a separate public GitHub repository. It contains no bot code,
credentials, watchlist, or configuration. No build step or server is required.

In the separate repository, enable Settings → Pages → Deploy from a branch →
`main` → `/ (root)`. Use a public repository eligible for GitHub Pages on the
free plan. Do not enable a paid plan or custom domain.

After GitHub confirms deployment, open the HTTPS site and verify its assets and
validation screen. Then set the verified URL as `JOIN_BASE_URL` in the bot's
local `.env` and restart the bot.

Invite format:

```text
https://YOUR-USERNAME.github.io/YOUR-LAUNCHER-REPOSITORY/?placeId=PLACE_ID&gameInstanceId=SERVER_UUID
```

Only click Open Roblox with a current server you have permission to access.
The launcher uses a user-initiated `roblox://` link. Browser prompts, app
installation, server lifetime, and Roblox access restrictions still apply.

Local preview, from the project root:

```powershell
.venv\Scripts\python.exe -m http.server 8765 --directory launcher --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/` for the validation screen. Native launch links can
also be copied into Windows Run (Win+R) without a hosted page.
