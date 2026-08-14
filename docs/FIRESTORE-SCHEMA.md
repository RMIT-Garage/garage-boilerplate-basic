# Firestore Schema

## Overview

All collections use the typed collection pattern — see `frontend/src/lib/firebase/firestore.ts`.
Security rules are in `firebase/firestore.rules`.

## Schema versioning

Every document in every collection **must** include a `_schemaVersion` field:

```typescript
_schemaVersion: 1  // increment when doing a breaking schema change