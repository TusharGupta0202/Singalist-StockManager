#Store It — Full-Stack Cloud Storage Platform

A production-grade cloud storage application built with modern Next.js App Router, secure OTP authentication, collaborative file sharing, analytics instrumentation, and scalable backend architecture powered by Appwrite.

This project demonstrates real-world full-stack engineering across frontend architecture, backend system design, authentication workflows, storage management, performance optimization, and analytics tracking.

## Overview

Store It is a secure, scalable cloud file management platform where users can:

• Upload files (drag & drop supported)
• Organize files by category (Documents, Images, Media, Others)
• Rename files
• Delete files
• Download files
• Share files with other users
• Search and sort files dynamically
• View real-time storage usage analytics
• Authenticate using passwordless Email OTP

Built using Next.js Server Actions, secure session handling, and structured data modeling.

## System Architecture

### Frontend
- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI primitives
- ShadCN component system
- Recharts (storage visualization)
- React Hook Form + Zod (validation)
- React Dropzone (file uploads)
- Debounced search (use-debounce)

### Backend
- Appwrite (Authentication + Storage + Database)
- Node Appwrite SDK
- Server Actions (Next.js)
- Secure HTTP-only session cookies
- Query-based access control
- File metadata stored in Appwrite TablesDB

### Analytics
- PostHog (server-side tracking)
- Event tracking for:
- User signup
- User login
- File upload
- File rename
- File share
- File delete
- File download
- User logout

## Authentication Flow (Passwordless OTP)

1. User enters email.
2. Appwrite sends OTP token.
3. User verifies OTP.
4. Server creates secure session.
5. HTTP-only cookie is stored.
6. Protected routes validate session server-side.

## Security Characteristics

• No password storage
• Session client vs admin client separation
• Secure cookie (HTTP-only, SameSite=strict)
• Server-only mutation logic
• Secret key never exposed to client

## File Lifecycle

### Upload
• Drag & drop supported
• 50MB max size validation
• File uploaded to Appwrite Storage bucket
• Metadata stored in database
• Path revalidated
• Analytics event captured
• Automatic cleanup if DB write fails

### View

• Signed Appwrite file URL
• Owner + shared users access via OR query condition

### Share

• Email validation via RegEx
• Shared users stored in array
• Access controlled through query logic
• Share analytics tracked

### Rename

• Database row updated
• Route revalidated

### Delete

• Data base row removed
• Storage file deleted
• Analytics tracked

## Storage Dashboard

• Radial storage usage visualization
• Category-level breakdown
• Latest modified file per category
• Total storage capacity modeling (2GB bucket logic)
• Optimized O(1) lookups using Map and Set

### Search & Sorting

• 300ms debounced search
• Dynamic URL query updates
• Server-side filtering
• Sorting options:
• Date (newest / oldest)
• Name (A–Z / Z–A)
• Size (highest / lowest)

## Performance Optimizations

• Server Components for heavy routes
• Parallel data fetching with Promise.all
• Cached base URL construction
• O(1) lookup with Map and Set
• Debounced input handling
• Controlled modal rendering
• Efficient Appwrite query composition

## Security Considerations

• Admin and session clients strictly separated
• Secret key never exposed client-side
• Server-only file mutations
• HTTP-only cookies
• Strict SameSite policy
• Access restricted to:
    • File owner
    • Shared email users
• Automatic rollback on failed upload

## Project Structure

/app
  /sign-in
  /sign-up
  /documents
  /images
  /media
  /others
  layout.tsx
  page.tsx

/components
  AuthForm
  FileUploader
  ActionDropdown
  Chart
  Sidebar
  MobileNavigation
  Search
  Card
  Thumbnail

/lib
  /actions
    file.actions.ts
    user.actions.ts
  /appwrite
  utils.ts
  posthog-server.ts

/types
/constants

## Environment Variables4

NEXT_PUBLIC_APPWRITE_PROJECT=
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_DATABASE=
NEXT_PUBLIC_APPWRITE_USERS_TABLE=
NEXT_PUBLIC_APPWRITE_FILES_TABLE=
NEXT_PUBLIC_APPWRITE_BUCKET=
NEXT_APPWRITE_KEY=

NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

## Local Setup
1️⃣ Install dependencies
npm install
2️⃣ Run development server
npm run dev
3️⃣ Visit
http://localhost:3000

## Production Build
npm run build
npm start


Optimized for deployment on **Vercel** with Appwrite backend configured.

##  Scalability Considerations

- Modular server action architecture
- Query-based filtering scalable with DB indexing
- Analytics decoupled from core logic
- Reusable component system
- Configurable storage capacity
- Clean domain model separation

## Future Improvements

- Role-based access control
- Folder hierarchy system
- Chunked uploads
- Pagination
- Rate limiting
- Background job processing
- Multi-tenant support

## What This Project Demonstrates

### 🖥 Frontend Engineering

- Scalable component architecture
- Strong TypeScript usage
- Form validation best practices
- Advanced UI interactions
- Responsive layout system
- Data visualization integration

### Backend Engineering

- Passwordless authentication workflow
- Secure session management
- Storage + metadata consistency
- Query abstraction & filtering
- Access control modeling
- Transaction-safe file handling

### Full Stack Capability

- End-to-end data flow
- Server Actions integration
- Database schema modeling
- Analytics instrumentation
- Production deployment readiness

### MERN-Equivalent Skillset

- Modern JavaScript ecosystem
- API-style server mutations
- Document-based storage logic
- Access-based filtering
- Scalable application structure

# 👨‍💻 Author

**Tushar Gupta**  
Full Stack Developer | Frontend Specialist | MERN Stack Engineer
