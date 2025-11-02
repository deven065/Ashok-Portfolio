# Git Revert Instructions

To revert to the commit where README.md was revised, use one of these methods:

## Option 1: Revert Specific Commits (Recommended)

1. **Find the commit hash you want to revert to:**
   ```bash
   git log --oneline -10
   ```

2. **Revert commits after the README revision:**
   ```bash
   # Revert the most recent commit
   git revert HEAD
   
   # Or revert multiple commits
   git revert HEAD~1 HEAD~2
   ```

## Option 2: Reset to a Specific Commit (Hard Reset - Use with Caution)

⚠️ **Warning**: This will delete commits. Only use if you haven't pushed to remote yet.

1. **Find the commit hash:**
   ```bash
   git log --oneline
   ```

2. **Reset to that commit:**
   ```bash
   git reset --hard <commit-hash>
   ```

## Option 3: Checkout the Specific Commit

1. **Checkout the commit:**
   ```bash
   git checkout <commit-hash>
   ```

2. **Create a new branch from that point:**
   ```bash
   git checkout -b revert-to-readme-commit
   ```

## To Fix Static Page Issues

If pages are being statically generated when they shouldn't be:

1. **Ensure dynamic rendering is forced:**
   Add this to pages that need to be dynamic:
   
   For `app/page.tsx`:
   ```typescript
   export const dynamic = 'force-dynamic';
   ```

2. **Or make it a client component:**
   Add `"use client"` at the top of the file

