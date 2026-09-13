# Server & Deployment Guide (`04_Deployments.md`)

## 1. Production Server Overview

| Property | Details |
| :--- | :--- |
| **Server Name** | `CaresBDVPS` |
| **Hostname** | `server.caresbd.com` |
| **IP Address** | `144.79.218.122` |
| **User** | `root` |
| **OS & Hardware** | `Ubuntu 24.04 LTS` / `2 vCPU, 4GB RAM, 48GB SSD` |
| **SSH Shortcut** | `ssh cares-vps` |
| **SSH Keys** | Authorized: RSA + Ed25519 (Plexivia & Default) |
| **Secure Docs** | `J:\My Drive\CLIENTS\Cares Bangladesh\CREDENTIALS.md` |

---

## 2. Connecting to the VPS

### Via SSH Alias (from `C:\Users\mdikr\.ssh\config`):
```bash
ssh CaresBDVPS
```

### Direct SSH using Identity Key:
```bash
# Using root RSA key:
ssh -i ~/.ssh/id_rsa root@server.caresbd.com

# Using Plexivia key:
ssh -i ~/.ssh/id_ed25519_plexivia root@server.caresbd.com
```

---

## 3. Deployment Rules (Strict)

Per `GEMINI.md`:
1. **NEVER run VPS build, docker compose up, or deploy scripts without explicit user instruction.**
2. Only when the user commands **"ডিপ্লয় দাও"** (Deploy now), execute the deployment actions.
3. Commits to `temp` or `Live` and pushing to GitHub do not require confirmation.
