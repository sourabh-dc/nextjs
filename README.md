# Next.js

Production Next.js applications — ERP admin dashboard, customer-facing storefront, and corporate website.

---

## Projects

| Project | Description |
|---|---|
| [admin-app](./admin-app/) | Full-featured ERP admin dashboard — orders, inventory, finance, staff, vendor management |
| [customer-app](./customer-app/) | Customer-facing storefront with product catalog, cart, and order tracking |
| [erp-web](./erp-web/) | Lightweight ERP web interface with sidebar navigation |
| [corporate-website](./corporate-website/) | Corporate landing page and pitch deck |

---

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui, Radix UI |
| State | React hooks, Context API |
| Auth | JWT-based session management |
| API | REST via Next.js API routes / proxy |
| Deployment | Vercel |

---

## Architecture Patterns

**Admin ERP Dashboard**
Multi-screen ERP with role-based access — operations, finance, inventory, vendor orders, returns, and staff management. Proxy layer routes API calls to the backend microservice.

```
Browser
    │
    ▼
Next.js App (Admin)
    │
    ├── /api/proxy/[...path]   (rewrites to backend)
    │
    └── ERP Screens: Orders · Inventory · Finance · Vendors · Staff
```

**Customer Portal**
Server-side rendered storefront with dynamic product catalog and real-time order status.

**Corporate Website**
Static Next.js site with pitch deck, service pages, and contact flow.
